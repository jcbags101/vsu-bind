import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component', () => {
  const mockHandleOpenItem = jest.fn();
  const item = { id: '1', title: 'Test Item', status: 'Binding' };

  beforeEach(() => {
    render(<ListItem item={item} id={item.id} title={item.title} status={item.status} handleOpenItem={mockHandleOpenItem} />);
  });

  test('renders item id correctly', () => {
    const idElement = screen.getByText(item.id);
    expect(idElement).toBeInTheDocument();
  });

  test('renders item title correctly', () => {
    const titleElement = screen.getByText(item.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders item status correctly', () => {
    const statusElement = screen.getByText(item.status);
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('bg-red-200 text-red-700');
  });

  test('invokes handleOpenItem on item click', () => {
    fireEvent.click(screen.getByText(item.id));
    expect(mockHandleOpenItem).toHaveBeenCalledTimes(1);
    expect(mockHandleOpenItem).toHaveBeenCalledWith(item);
  });

  test.each([
    ['Binding', 'bg-red-200 text-red-700'],
    ['Submitted', 'bg-green-200 text-green-700'],
    ['Pending', 'bg-yellow-200 text-yellow-700']
  ])('renders status %s with class %s correctly', (status, expectedClass) => {
    const { rerender } = render(<ListItem item={{...item, status}} id={item.id} title={item.title} status={status} handleOpenItem={mockHandleOpenItem} />);
    const statusElement = screen.getByText(status);
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass(expectedClass);
  });
});