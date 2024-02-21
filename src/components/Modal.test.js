```jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe('Modal Component', () => {
  it('should not render the modal when isOpen is false', () => {
    const { queryByTestId } = render(<Modal isOpen={false} onClose={() => {}} />);
    expect(queryByTestId('my-modal')).toBeNull();
  });

  it('should render the modal when isOpen is true', () => {
    const { getByTestId } = render(<Modal isOpen={true} onClose={() => {}} />);
    expect(getByTestId('my-modal')).toBeTruthy();
  });

  it('should execute onClose callback when the close button is clicked', () => {
    const mockOnClose = jest.fn();
    const { getByTestId } = render(<Modal isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(getByTestId('ok-btn'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should display children content inside the modal', () => {
    const childContent = "Test Child Content";
    const { getByText } = render(<Modal isOpen={true} onClose={() => {}}>{childContent}</Modal>);
    expect(getByText(childContent)).toBeTruthy();
  });
});
```