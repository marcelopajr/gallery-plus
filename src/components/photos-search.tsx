import React from 'react';
import InputText from './input-text';
import SearchIcon from '../assets/icons/search.svg?react';
import { debounce } from '../helpers/utils';
import usePhotos from '../contexts/photos/hooks/use-photos';

export default function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState('');
  const { filters } = usePhotos();

  const debounceSetValue = React.useCallback(
    debounce((value: string) => {
      filters.setQ(value);
    }, 200),
    [filters.setQ]
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(value);
    debounceSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Search photos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
