import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { appStyles, ErrorView, SpacingView } from '../../components/StyleGuide';
import ProductForm from '../../components/ProductForm';
import { Context as StoreContext } from '../../contexts/StoreContext';

const ProductInfoScreen = ({ route, navigation }) => {
    const { product } = route.params || { product: null };
    const [addProductMode, setAddProduct] = useState(true);
    const { state: storeState, addProduct, updateProduct } = useContext(StoreContext);

    console.log('-------------ProductInfoScreen-------------');
    console.log('storeState | ', storeState);

    useEffect(() => {
        if (product) {
            navigation.setOptions({ headerTitle: `Update Product ID : ${product.id}` });
            setAddProduct(false);
        } else {
            navigation.setOptions({ headerTitle: 'Add New Product' });
            setAddProduct(true);
        }
    }, [product, navigation]);

    const AddProductForm = () => {
        return (<>
            <ProductForm
                submitButtonText="Add New Product"
                onSubmit={addProduct}
            />
        </>);
    };

    const UpdateProductForm = () => {
        return (<>
            <ProductForm
                product={product}
                submitButtonText="Update Product"
                onSubmit={(data) => {
                    updateProduct({ product: product, name: `${data.name}`, description: `${data.description}`, price: `${parseFloat(data.price)}`, quantity: `${parseInt(data.quantity)}` });
                }}
            />
        </>);
    };

    const ErrorSection = () => {
        return (<>
            {storeState.errorMessage ? <ErrorView errorMessage={storeState.errorMessage} /> : null}
        </>);
    };

    return (
        <View style={appStyles.screenContainer}>
            {addProductMode
                ? <AddProductForm />
                : <UpdateProductForm />
            }
            <SpacingView />
            <ErrorSection />
        </View>
    );
};

export default ProductInfoScreen;