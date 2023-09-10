import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchForm({ intialValue = ''}) {
  const [value, setValue] = useState(intialValue);
  const router = useRouter();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ( !value ) {
      router.push('/');
      return;
    }

    router.push(`/search?q=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>Search</button>
    </form>

    /* please */
  )
}