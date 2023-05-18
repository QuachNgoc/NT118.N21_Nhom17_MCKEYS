import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { FontSize, Color, Icon, Images } from "../contants";
import { Top, MenuTab } from "../components";
const CatetoryScreen = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Địa chỉ hiện tại",
        gps: {
            latitude: 10.846240,
            longitude: 106.769119
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Cơm",
            icon: Icon.rice_bowl,
        },
        {
            id: 2,
            name: "Mì",
            icon: Icon.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: Icon.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: Icon.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: Icon.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: Icon.pizza,
        },
        {
            id: 7,
            name: "Ăn Vặt",
            icon: Icon.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: Icon.sushi,
        },
        {
            id: 9,
            name: "Tráng miệng",
            icon: Icon.donut,
        },
        {
            id: 10,
            name: "Đồ uống",
            icon: Icon.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "MCKEYS Burger",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: Images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 10.872760,
                longitude: 106.766280,
            },
            courier: {
                avatar: Images.avatar_1,
                name: "Ngọc"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: Images.crispy_chicken_burger,
                    description: "Burger với gà, phô mai, ít rau trộn",
                    calories: 200,
                    price: 100000
                },
                {
                    menuId: 2,
                    name: "Burger gà giòn với mù tạt mật ong",
                    photo: Images.honey_mustard_chicken_burger,
                    description: "Burger gà giòn với xà lách trộn mù tạt mật ong",
                    calories: 250,
                    price: 150000
                },
                {
                    menuId: 3,
                    name: "Khoai tây chiên giòn",
                    photo: Images.baked_fries,
                    description: "Khoai tây chiên giòn",
                    calories: 194,
                    price: 80000
                }
            ]
        },
        {
            id: 2,
            name: "MCKEYS Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: Images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 10.877070,
                longitude: 106.775020,
            },
            courier: {
                avatar: Images.avatar_2,
                name: "Sa Đam"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: Images.hawaiian_pizza,
                    description: "Thịt xông khói Canada, đế pizza nhà làm, sốt pizza",
                    calories: 250,
                    price: 150000
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: Images.pizza,
                    description: "Cà chua tươi, húng quế thơm và bocconcini nấu chảy",
                    calories: 250,
                    price: 200000
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: Images.tomato_pasta,
                    description: "Pasta với cà chua tươi",
                    calories: 100,
                    price: 100000
                },
                {
                    menuId: 7,
                    name: "Salad Địa Trung Hải ",
                    photo: Images.salad,
                    description: "Xà lách, cà chua, dưa leo thái nhỏ",
                    calories: 100,
                    price: 100000
                }
            ]
        },
        {
            id: 3,
            name: "MCKEYS Hotdogs",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: Images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 10.877060,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: Images.avatar_3,
                name: "Việt"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: Images.chicago_hot_dog,
                    description: "Cà chua tươi, tất cả xúc xích bò",
                    calories: 100,
                    price: 200000
                }
            ]
        },
        {
            id: 4,
            name: "MCKEYS Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: Images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 10.877170,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: Images.avatar_4,
                name: "Nhung"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: Images.sushi,
                    description: "Cá hồi tươi, cơm sushi, bơ tươi ngon ngọt",
                    calories: 100,
                    price: 50000
                }
            ]
        },
        {
            id: 5,
            name: "MCKEYS ẩm thực",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: Images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 10.177070,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: Images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: Images.kolo_mee,
                    description: "mì xá xíu",
                    calories: 200,
                    price: 50000
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: Images.sarawak_laksa,
                    description: "Bún, tôm nấu",
                    calories: 300,
                    price: 80000
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: Images.nasi_lemak,
                    description: "Một món cơm truyền thống của người Mã Lai",
                    calories: 300,
                    price: 80000
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani với Mutton",
                    photo: Images.nasi_briyani_mutton,
                    description: "Món cơm Ấn Độ truyền thống với thịt cừu",
                    calories: 300,
                    price: 80000
                },

            ]
        },
        {

            id: 6,
            name: "MCKEYS Dessets",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: Images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 10.877070,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: Images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: Images.teh_c_peng,
                    description: "Ba lớp Teh C Peng",
                    calories: 100,
                    price: 20000
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: Images.ice_kacang,
                    description: "Đá bào đậu đỏ",
                    calories: 100,
                    price: 30000
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: Images.kek_lapis,
                    description: "bánh nhiều lớp",
                    calories: 300,
                    price: 20000
                }
            ]

        }

    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: FontSize.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={Icon.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: Color.orangered_100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: FontSize.radius
                        }}
                    >
                        <Text style={{ ...FontSize.h3, color: Color.white }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: FontSize.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={Icon.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: FontSize.padding,
                        paddingBottom: FontSize.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? Color.primary : Color.white,
                        borderRadius: FontSize.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: FontSize.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? Color.white : Color.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: FontSize.padding,
                            color: (selectedCategory?.id == item.id) ? Color.white : Color.black,
                            ...FontSize.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: FontSize.padding * 2 }}>
                <Text style={{ ...FontSize.h1 }}>Main</Text>
                <Text style={{ ...FontSize.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: FontSize.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: FontSize.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: FontSize.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: FontSize.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: FontSize.width * 0.3,
                            backgroundColor: Color.white,
                            borderTopRightRadius: FontSize.radius,
                            borderBottomLeftRadius: FontSize.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FontSize.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FontSize.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: FontSize.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={Icon.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: Color.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FontSize.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FontSize.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FontSize.h3, color: Color.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FontSize.body3,
                                        color: (priceRating <= item.priceRating) ? Color.black : Color.darkgray
                                    }}
                                >đ</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: FontSize.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
            <MenuTab/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default CatetoryScreen;