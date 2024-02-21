import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component tests', () => {
  test('should not render modal when isOpen is false', () => {
    const { queryByTestId } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div data-testid="child">Content</div>
      </Modal>
    );
    expect(queryByTestId('child')).toBeNull();
  });

  test('should render modal when isOpen is true', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div data-testid="child">Content</div>
      </Modal>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  test('should close modal when close button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );
    fireEvent.click(getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});