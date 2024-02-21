import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component', () => {
  const mockHandleOpenItem = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { getByText } = render(
      <ListItem
        id="1"
        title="Test Item"
        status="Pending"
        handleOpenItem={mockHandleOpenItem}
        item={{ id: '1', title: 'Test Item', status: 'Pending' }}
      />
    );
    expect(getByText('Test Item')).toBeInTheDocument();
  });

  it('displays the correct status color for "Pending"', () => {
    const { getByText } = render(
      <ListItem
        id="1"
        title="Test Item"
        status="Pending"
        handleOpenItem={mockHandleOpenItem}
        item={{ id: '1', title: 'Test Item', status: 'Pending' }}
      />
    );
    expect(getByText('Pending')).toHaveClass('bg-yellow-200 text-yellow-700');
  });

  it('displays the correct status color for "Submitted"', () => {
    const { getByText } = render(
      <ListItem
        id="2"
        title="Submitted Item"
        status="Submitted"
        handleOpenItem={mockHandleOpenItem}
        item={{ id: '2', title: 'Submitted Item', status: 'Submitted' }}
      />
    );
    expect(getByText('Submitted')).toHaveClass('bg-green-200 text-green-700');
  });

  it('displays the correct status color for "Binding"', () => {
    const { getByText } = render(
      <ListItem
        id="3"
        title="Binding Item"
        status="Binding"
        handleOpenItem={mockHandleOpenItem}
        item={{ id: '3', title: 'Binding Item', status: 'Binding' }}
      />
    );
    expect(getByText('Binding')).toHaveClass('bg-red-200 text-red-700');
  });

  it('calls handleOpenItem when clicked', () => {
    const item = { id: '1', title: 'Clickable Item', status: 'Pending' };
    const { getByText } = render(
      <ListItem
        id="1"
        title="Clickable Item"
        status="Pending"
        handleOpenItem={mockHandleOpenItem}
        item={item}
      />
    );

    fireEvent.click(getByText('Clickable Item'));

    expect(mockHandleOpenItem).toHaveBeenCalledWith(item);
  });
});