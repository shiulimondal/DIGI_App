import React, { useState,useCallback } from 'react'
import Modal from 'react-native-modal';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import{ Colors} from '../../Constants/Colors';
import { Calibri } from '../../Constants/Inter ';
import { useDispatch, useSelector } from 'react-redux';
import { showToastMsg, getData, setData} from '../../Service/localStorage';
import {postWithOutToken, postWithOutTokenWithoutData} from "../../Service/service";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useFocusEffect } from '@react-navigation/native';

const CourseFilter = ({ setshow, show, category_id, price_order, filter_function}) => {
    const { baseUrl, siteUrl, userToken, userData } = useSelector(state => state.common);
    const [course_Category, setCourseCategory] = useState({
        isLoading : true, 
        list: []
      })

     const price_order_arr = [{id: 1, name: 'Low to High', val:'asc'},{id:2, name:'High to Low', val:'desc'}]; 

      useFocusEffect(
		React.useCallback(() => {
          coursesCategoryList();
		}, [])
	); 
    
    const coursesCategoryList = () => {
        postWithOutTokenWithoutData(baseUrl, "categories")
        .then((response) => {
          if (response.status == true) {
            setCourseCategory({
              isLoading: false,
              list: response.data,
            });
          }else {
            console.log(response.message);
          }
        })
        .catch((error) => {
          console.log("Error : ", error);
        });
      }

    const [selectedOption, setSelectedOption] = useState(category_id); // State to keep track of the selected option
    const [selectedOptionPrice, setSelectedOptionPrice] = useState(""); // State to keep track of the selected option

    const handleOptionSelect = (id) => {
        setSelectedOption(id);
    };
    const RadioButton = ({ label, selected, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', margin: 5, marginLeft: 15 }}>
                <Icon
                    name={selected ? 'dot-circle-o' : 'circle-o'} // Icon names can vary based on the icon library you choose
                    size={20}
                    color={selected ? Colors.primary : 'gray'}
                />
                <Text style={{ marginLeft: 10, fontFamily: Calibri.regular, color: Colors.fontcolor}}>{label}</Text>
            </TouchableOpacity>
        );
    };

    const RadioButton_Price = ({ label, selected, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', margin: 5, marginLeft: 15 }}>
                <Icon
                    name={selected ? 'dot-circle-o' : 'circle-o'} // Icon names can vary based on the icon library you choose
                    size={20}
                    color={selected ? Colors.primary : 'gray'}
                />
                <Text style={{ marginLeft: 10, fontFamily: Calibri.regular, color: Colors.fontcolor}}>{label}</Text>
            </TouchableOpacity>
        );
    };


    function filter_now(){
        filter_function(selectedOption, selectedOptionPrice);
        setshow(false);
    }

    return (
        <Modal
            isVisible={show}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            backdropOpacity={0}
            style={{ margin: 0, marginTop: 59, flexDirection: 'row', flex: 1 }}
            onBackButtonPress={() => setshow(false)}
        >
            <View style={{ width: '100%', height: '100%', flexDirection: 'row', }}>
                <View style={{ width: '70%', backgroundColor: Colors.white}}>
                    <Text style={{ marginLeft: 15, fontSize: 17, marginVertical: 8, fontWeight: 'bold', color: Colors.secondary }}>Category</Text>
                    {
                        course_Category.isLoading === false && course_Category.list.length > 0?
                            <View style={{ justifyContent: 'center' }}>
                                <FlatList
                                    data={course_Category.list}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <RadioButton
                                            label={item.name}
                                            selected={selectedOption === item.id}
                                            onPress={() => handleOptionSelect(item.id)}
                                        />
                                    )}
                                />
                            </View>

                    :
                    null
                }

                <Text style={{ marginLeft: 15, fontSize: 17, marginVertical: 8, fontWeight: 'bold', color: Colors.secondary }}>Price</Text>

                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        data={price_order_arr}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <RadioButton_Price
                                label={item.name}
                                selected={selectedOptionPrice === item.val}
                                onPress={() => setSelectedOptionPrice(item.val)}
                            />
                        )}
                    />
                </View>


                <TouchableOpacity style={{height: 45,
                    width: "40%",
                    backgroundColor: Colors.secondary,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 15,
                    borderRadius: 5}} onPress={filter_now}>
                    <Text style={{ fontWeight: "normal", fontSize: 15, color: Colors.white }}>
                        Filter
                    </Text>
                </TouchableOpacity>
                
                
                </View>
           </View>
        </Modal>
    )
}

export default CourseFilter