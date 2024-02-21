import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Modal from './Modal'; // Adjust the import path as necessary

describe('Modal Component', () => {
  it('should render children and a close button when open', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
    expect(getByText('Close')).toBeInTheDocument();
  });

  it('should not render when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(queryByText('Modal Content')).not.toBeInTheDocument();
    expect(queryByText('Close')).not.toBeInTheDocument();
  });

  it('should call onClose handler when the close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByText('Close'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should be accessible via keyboard navigation', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div tabIndex={0} data-testid="focusable-element">Focusable Element</div>
      </Modal>
    );

    const focusableElement = getByTestId('focusable-element');
    focusableElement.focus();

    expect(focusableElement).toHaveFocus();
  });
});