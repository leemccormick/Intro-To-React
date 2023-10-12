import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { appStyles, ErrorView, SpacingView } from '../../components/StyleGuide';
import ProductForm from '../../components/ProductForm';
import { Context as StoreContext } from '../../contexts/StoreContext';
const ProductInfoScreen = ({ route, navigation }) => {

    const { product } = route.params || { product: null };
    const [addProductMode, setAddProduct] = useState(true);
    const { state: storeState, addProduct, updateProduct } = useContext(StoreContext);



    console.log('-------------ProductInfoScreen-------------');
    console.log('storeState | ', storeState);
    console.log('storeState | ', storeState.errorMessage);


    // if (product !== null) {
    //     console.log('product | ', product);
    // }

    useEffect(() => {
        if (product) {
            // Updating existing product
            navigation.setOptions({ headerTitle: `Update Product ID : ${product.id}` });
            setAddProduct(false);
            console.log('product | ', product);
        } else {
            // Adding new product
            navigation.setOptions({ headerTitle: 'Add New Product' });
            setAddProduct(true);
            console.log('product | null add mode');

        }
    }, [product, navigation]);

    const AddProductForm = () => {
        return (<>
            <ProductForm
                // errorMessage={storeState.errorMessage}
                submitButtonText="Add New Product"
                onSubmit={
                    addProduct
                    
                }
            />
        </>);
    };

    const UpdateProductForm = () => {
        return (<>
            <ProductForm
            product={product}
                // errorMessage={storeState.errorMessage}
                submitButtonText="Update Product"
                onSubmit={(data) => {
                    console.log("Update Product Pressed");
                    console.log("data", data);

                    console.log("name", data.name);
                    console.log("description", data.description);
                    console.log("price", parseFloat(data.price));
                    console.log("quality", parseInt(data.quantity));
                    const name = `${data.name}`;

                    updateProduct({ product: product, name:`${data.name}`, description:`${data.description}`, price:`${parseFloat(data.price)}`, quantity:`${parseInt(data.quantity)}`  });
            
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

{/* <Text>{storeState.totalProducts} TESTTEST TEST</Text>
<Text>{storeState.errorMessage} TESTTEST TEST</Text> */}


            { addProductMode
                ? <AddProductForm />
                : <UpdateProductForm />
            }
            <SpacingView />
                   <ErrorSection />
        </View>
        // <View style={appStyles.screenContainer}>
        //     <Text style={appStyles.headerStyle}>Add or update product here...</Text>
        // </View>
 
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default ProductInfoScreen;