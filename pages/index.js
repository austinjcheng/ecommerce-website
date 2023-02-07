import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

const HomePage = (props) => {
  return props.products.map(product => {
    <div>
      <Link href="/sergtwarq">
        <a>
          <h1>{product.name}</h1>
        </a>
      </Link>
      <p>{product.description}</p>
      <p>${product.price / 100}</p>
    </div>
  })
}

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map(filename => {
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    const { data } = matter(fileContent);
    console.log(data);
    // pull out frontmatter => name
    // return name, slug
    const slug = `/products/${filename.replace('.md', '')}`;
    const product = {
      ...data,
      slug,
    };
    return product;
  });

  return {
    props: {
      products,
    },
  };
};

export default HomePage;