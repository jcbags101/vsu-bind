import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component tests', () => {
  const itemMock = { id: '1', title: 'Test Item 1', status: 'Binding' };
  const handleOpenItemMock = jest.fn();

  it('renders the correct id and title', () => {
    const { getByText } = render(
      <ListItem
        id={itemMock.id}
        title={itemMock.title}
        status={itemMock.status}
        handleOpenItem={handleOpenItemMock}
        item={itemMock}
      />
    );

    expect(getByText(itemMock.id)).toBeInTheDocument();
    expect(getByText(itemMock.title)).toBeInTheDocument();
  });

  it('applies the correct status color', () => {
    const { getByText } = render(
      <ListItem
        id={itemMock.id}
        title={itemMock.title}
        status={itemMock.status}
        handleOpenItem={handleOpenItemMock}
        item={itemMock}
      />
    );

    const statusElement = getByText(itemMock.status);
    expect(statusElement).toHaveClass('bg-red-200 text-red-700');
  });

  it('calls handleOpenItem on click', () => {
    const { getByText } = render(
      <ListItem
        id={itemMock.id}
        title={itemMock.title}
        status={itemMock.status}
        handleOpenItem={handleOpenItemMock}
        item={itemMock}
      />
    );

    fireEvent.click(getByText(itemMock.id));
    expect(handleOpenItemMock).toHaveBeenCalledWith(itemMock);
  });
});