import React, { useState, useEffect } from 'react';
import { Input } from 'react-native-elements'
import Spacer from './Spacer';
import { AppButton } from './StyleGuide';

const ProductForm = ({ product, onSubmit, submitButtonText }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidDescription, setIsValidDescription] = useState(false);
    const [isValidPrice, setIsValidPrice] = useState(false);
    const [isValidQuantity, setIsValidQuantity] = useState(false);

    console.log('-------------ProductForm-------------');
    console.log('product is : ', product);
    console.log('onSubmit is : ', onSubmit);
    console.log('submitButtonText is : ', submitButtonText);

    const validateName = (text) => {
        return text.length > 2;
    }

    const validateDescription = (text) => {
        return text.length > 2;
    }

    const validatePrice = (text) => {
        return text !== '' && parseFloat(text) > 0.0;
    }

    const validateQuantity = (text) => {
        return text !== '' && parseInt(text) > -1;
    }

    const handleNameInputChange = (text) => {
        const isValidName = (text) => {
            if (!validateName(text)) {
                setNameError('Product Name should be greater than 2 characters.');
                return false;
            } else {
                setNameError('');
                return true;
            }
        };
        const isValidData = isValidName(text) && isValidDescription && isValidPrice && isValidQuantity;
        const hasDataChanged = product ? (text !== product.name || description !== product.description || price !== product.price || quantity !== product.quantity) : true;
        setName(text);
        setIsValidName(isValidName(text));
        setIsButtonDisabled(isValidData ? !hasDataChanged : true);
    };

    const handleDescriptionInputChange = (text) => {
        const isValidDescription = (text) => {
            if (!validateDescription(text)) {
                setDescriptionError('Product Decription should be greater than 2 characters.');
                return false;
            } else {
                setDescriptionError('');
                return true;
            }
        };
        const isValidData = isValidName && isValidDescription(text) && isValidPrice && isValidQuantity;
        const hasDataChanged = product ? (name !== product.name || text !== product.description || price !== product.price || quantity !== product.quantity) : true;
        setDescription(text);
        setIsValidDescription(isValidDescription(text));
        setIsButtonDisabled(isValidData ? !hasDataChanged : true);
    };

    const handlePriceInputChange = (text) => {
        const isValidPrice = (text) => {
            if (!validatePrice(text)) {
                setPriceError('Product Price should be greater than $0.0');
                return false;
            } else {
                setPriceError('');
                return true;
            }
        };
        const isValidData = isValidName && isValidDescription && isValidPrice(text) && isValidQuantity;
        const hasDataChanged = product ? (name !== product.name || description !== product.description || text !== product.price || quantity !== product.quantity) : true;
        setPrice(text);
        setIsValidPrice(isValidPrice(text));
        setIsButtonDisabled(isValidData ? !hasDataChanged : true);
    };

    const handleQuantityInputChange = (text) => {
        const isValidQuantity = (text) => {
            if (!validateQuantity(text)) {
                setQuantityError('Product Quantity is invalided. Please, try again.');
                return false;
            } else {
                setQuantityError('');
                return true;
            }
        };
        const isValidData = isValidName && isValidDescription && isValidPrice && isValidQuantity(text);
        const hasDataChanged = product ? (name !== product.name || description !== product.description || text !== product.price || quantity !== product.quantity) : true;
        setQuantity(text);
        setIsValidQuantity(isValidQuantity(text));
        setIsButtonDisabled(isValidData ? !hasDataChanged : true);
    };

    useEffect(() => {
        if (product) {
            const { name, description, price, quantity } = product;
            setName(name);
            setDescription(description);
            setPrice(price);
            setQuantity(quantity);
            setIsValidName(validateName(name));
            setIsValidDescription(validateDescription(description));
            setIsValidPrice(validatePrice(price));
            setIsValidQuantity(validateQuantity(quantity));
        } else {
            setIsValidName(false);
            setIsValidDescription(false);
            setIsValidPrice(false);
            setIsValidQuantity(false);
        }
    }, [product]);

    return (<>
        <Input
            label="Product Name"
            value={name}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleNameInputChange}
            errorMessage={nameError}
        />
        <Spacer />

        <Input
            label="Description"
            value={description}
            onChangeText={handleDescriptionInputChange}
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={descriptionError}

        />
        <Spacer />

        <Input
            label="Price Per Unit"
            value={price.toString()}
            onChangeText={handlePriceInputChange}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="decimal-pad"
            errorMessage={priceError}
        />
        <Spacer />

        <Input
            label="Quantity"
            value={quantity.toString()}
            onChangeText={handleQuantityInputChange}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            errorMessage={quantityError}
        />
        <Spacer />

        <AppButton
            title={submitButtonText}
            onPress={() => onSubmit({ name, description, price, quantity })}
            disabled={isButtonDisabled}
        />
    </>);
};

export default ProductForm;