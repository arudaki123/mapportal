import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate'; 
import { motion } from 'framer-motion';
import Heading from '@theme/Heading';
import Button from '@site/src/components/Button';
import docsTree from '/src/data/docsTree.json';

export default function HomepageProducts(): JSX.Element {
    return (
        <div className="container-card">
            <Heading as='h1'>Khám phá sản phẩm của chúng tôi</Heading>
            <Heading as='h4'>Tìm hiểu các giải pháp điều hướng và bản đồ sáng tạo.</Heading>
            <div className={styles.productsGrid}>
            {docsTree[0]?.children?.filter((i:any)=>i.type =="folder")?.sort((a:any,b:any)=>a.position-b.position)
                .map((product:any, idx:any) => (
                <motion.div
                    key={idx}
                    className={styles.productCard}
                    whileHover={{ scale: 1.05,transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5,
                        type: 'spring', // Phản hồi mượt hơn
                        stiffness: 300, // Tăng độ nhạy
                        damping: 20,    // Giảm độ rung
                    }}
                >
                    <img width='48px' className='svg' src={product?.image || 'img/app-blockchain.svg'}></img>
                    {/* <Link className={styles.productLink} to={product.link}> */}
                    <h3>{product.label || product.name}</h3>
                    <p>{product.description || 'Description'}</p>
                    <Button 
                        label={<Translate id="common.viewDocs">Learn more</Translate>} 
                        link={`/docs/category/${product.label? product.label.toLowerCase().replace(/ /g, '-') : product.name}`}
                        variant="secondary"
                        size='md'
                        outline
                    />
                    {/* </Link> */}
                </motion.div>
            ))}
            </div>
        </div>
    );
}

