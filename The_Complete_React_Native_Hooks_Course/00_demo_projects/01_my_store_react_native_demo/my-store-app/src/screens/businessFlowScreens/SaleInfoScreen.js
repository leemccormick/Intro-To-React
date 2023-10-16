import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { appStyles, SpacingView, EndLineView, ErrorView } from '../../components/StyleGuide';
import useCurrentUser from '../../hooks/useCurrentUser';
import { Context as StoreContext } from '../../contexts/StoreContext';

const SaleInfoScreen = ({ navigation }) => {
    const { state: storeState, fetchSaleInfo } = useContext(StoreContext);
    const [fullName, rolesDescription, hasCustomerRole, hasSaleRole, hasAdminRole] = useCurrentUser();
    const saleInfo = storeState.saleInfo;

    console.log('-------------SaleInfoScreen-------------');
    console.log('storeState | ', storeState);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchSaleInfo();
        });
        return unsubscribe;
    }, [navigation]);

    const OrdersByStatusInfo = ({ status, total, sale }) => {
        return (<>
            <Text style={appStyles.smallTitleStyle}>{status} Orders</Text>
            <SpacingView />
            <View style={appStyles.rowContainerEvenly}>
                <Text style={[appStyles.subtitleStyle]}>Total :
                    <Text style={[appStyles.smallestTitleStyle]}> {total}</Text>
                </Text>
                <Text style={[appStyles.subtitleStyle]}>Sales :
                    <Text style={[appStyles.smallestTitleStyle]}> ${sale.toFixed(2)}</Text>
                </Text>
            </View>
        </>);
    };

    const ProductInfo = ({ title, details }) => {
        return (<>
            <Text style={[appStyles.subtitleStyle, styles.spacer]}>Total {title} :
                <Text style={[appStyles.smallestTitleStyle]}> {details}</Text>
            </Text>
        </>);
    };

    const SaleInfoSection = () => {
        return (<>
            <Text style={appStyles.titleStyleAlignCenter}>Sale Info</Text>
            <EndLineView />
            <Text style={[appStyles.titleStyle, appStyles.bottomPaddingStyle]}>Total Orders : {saleInfo.countOfAllOrders} </Text>
            <Text style={[appStyles.titleStyle]}>Total Sales : ${saleInfo.totalAmountSalesOfAllOrders.toFixed(2)} </Text>
            <SpacingView />

            <View style={[appStyles.boxWithShadow, appStyles.paddingStyle]}>
                <OrdersByStatusInfo
                    status='Pending'
                    total={saleInfo.countOfPendingOrders}
                    sale={saleInfo.totalAmountSalesOfPendingOrders}
                />
                <EndLineView />

                <OrdersByStatusInfo
                    status='Processing'
                    total={saleInfo.countOfProcessingOrders}
                    sale={saleInfo.totalAmountSalesOfProcessingOrders}
                />
                <EndLineView />

                <OrdersByStatusInfo
                    status='Shipped'
                    total={saleInfo.countOfShippedOrders}
                    sale={saleInfo.totalAmountSalesOfShippedOrders}
                />
                <EndLineView />

                <OrdersByStatusInfo
                    status='Delivered'
                    total={saleInfo.countOfDeliveredOrders}
                    sale={saleInfo.totalAmountSalesOfDeliveredOrders}
                />
                <EndLineView />

                <OrdersByStatusInfo
                    status='Cancelled'
                    total={saleInfo.countOfCancelledOrders}
                    sale={saleInfo.totalAmountSalesOfCancelledOrders}
                />
            </View>

            <SpacingView />

            <View style={[appStyles.boxWithShadow, appStyles.paddingStyle]}>
                <Text style={appStyles.smallTitleStyle}>Product Info</Text>
                <SpacingView />
                <ProductInfo title='Product' details={saleInfo.countOfProducts} />
                <ProductInfo title={`Product's Items`} details={saleInfo.countOfProductsItem} />
                <ProductInfo title='Products Out of Stock' details={saleInfo.countOfProductsOutOfStock} />
                <ProductInfo title='Amount of Products' details={saleInfo.totalAmountOfProducts} />
            </View>
        </>);
    };

    if (hasSaleRole || hasAdminRole) {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={appStyles.screenContainer}>
                {(storeState.saleInfo !== null)
                    ? <SaleInfoSection />
                    : null
                }
            </ScrollView>
        );
    } else {
        return (
            <View style={appStyles.screenContainer}>
                <ErrorView errorMessage={'User has not authorized to access to sale info.'} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    spacer: {
        margin: 7
    }
});

export default SaleInfoScreen;