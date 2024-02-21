```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem', () => {
  const mockHandleOpenItem = jest.fn();

  it('renders without crashing', () => {
    render(<ListItem id="1" title="Test Item" status="Pending" handleOpenItem={mockHandleOpenItem} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('applies status color for Binding status correctly', () => {
    render(<ListItem id="2" title="Binding Item" status="Binding" handleOpenItem={mockHandleOpenItem} />);
    const statusSpan = screen.getByText('Binding');
    expect(statusSpan).toHaveClass('bg-red-200 text-red-700');
  });

  it('applies status color for Submitted status correctly', () => {
    render(<ListItem id="3" title="Submitted Item" status="Submitted" handleOpenItem={mockHandleOpenItem} />);
    const statusSpan = screen.getByText('Submitted');
    expect(statusSpan).toHaveClass('bg-green-200 text-green-700');
  });

  it('applies status color for Pending status correctly', () => {
    render(<ListItem id="4" title="Pending Item" status="Pending" handleOpenItem={mockHandleOpenItem} />);
    const statusSpan = screen.getByText('Pending');
    expect(statusSpan).toHaveClass('bg-yellow-200 text-yellow-700');
  });

  it('calls handleOpenItem when clicked', () => {
    const item = { id: "5", title: "Clickable Item", status: "Binding" };
    render(<ListItem {...item} handleOpenItem={mockHandleOpenItem} />);
    fireEvent.click(screen.getByText('Clickable Item'));
    expect(mockHandleOpenItem).toHaveBeenCalledWith(item);
  });
});
```