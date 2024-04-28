// DropdownMenu.js
import React from 'react';

export function DropdownMenu({ selectedName, handleSelectChange }) {
  return (
    <select value={selectedName} onChange={handleSelectChange}>
      <option value="">--Please choose a mentor--</option>
      <option value="Name 1">John Doe</option>
      <option value="Name 2">Jane Doe</option>
      <option value="Name 3">Bob Ross</option>
      <option value="Name 4">Linus Torvalds</option>
    </select>
  );
}