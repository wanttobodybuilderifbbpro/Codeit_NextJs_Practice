import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/components/ProductList.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Head from 'next/head';

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);


  return (
    <>
      <Head>
        <title>{q} Results - Codeitmall</title>
      </Head>  
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    
    </>
  );
}
