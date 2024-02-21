import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  test('does not render the modal when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText('Close')).toBeNull();
  });

  test('renders the modal when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={() => {}}>Modal Content</Modal>);
    expect(screen.queryByText('Modal Content')).not.toBeNull();
  });

  test('closes the modal when the Close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);
    fireEvent.click(screen.getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('renders children inside the modal', () => {
    const childText = 'This is a child node';
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>{childText}</div>
      </Modal>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test('has the correct class names on the container', () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    const modalElement = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-50.overflow-y-auto.h-full.w-full');
    expect(modalElement).not.toBeNull();
  });

  test('has an OK button with the correct styling', () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    const okButton = screen.getByText('Close');
    expect(okButton).toHaveClass('px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500');
  });
});