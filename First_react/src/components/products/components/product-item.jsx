import styles from './product-item.module.css'

const ButtonComp = () => {
    console.log(styles);
    
    return <button className={styles.buttonStyle}>Click</button>
}


const ProductItem = ({ singleProductItem, key }) => {
    return (
        <div style={{padding: "20px", border:"2px solid red", margin:'12px'}}
             key={key}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComp/>
        </div>
        
    )
}

export default  ProductItem;