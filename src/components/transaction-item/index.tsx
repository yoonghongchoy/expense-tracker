import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationConstant, TransactionConstant} from '../../constants';
import {Colors, Typography} from '../../styles';
import {IconHelper} from '../../utils';
import {DailyTransactionScreenNavigationProps} from '../../screens/daily-transaction';

interface TransactionItemProps {
  navigation: DailyTransactionScreenNavigationProps;
  id: number;
  payee: string;
  type: TransactionConstant.TransactionType;
  category: TransactionConstant.CategoryType;
  date: string;
  amount: number;
}

const TransactionItem = ({
  navigation,
  id,
  payee,
  type,
  category,
  date,
  amount,
}: TransactionItemProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? Colors.LIGHT_GRAY : 'transparent',
          borderRadius: pressed ? 10 : 0,
        },
        style.container,
      ]}
      onPress={() =>
        navigation.navigate(NavigationConstant.AppScreens.TRANSACTION, {
          id,
          payee,
          type,
          category,
          date,
          amount,
        })
      }>
      <View style={style.iconContainer}>
        <FontAwesomeIcon
          icon={IconHelper.getCategoryIcon(category)}
          size={23}
        />
      </View>
      <View style={style.detailContainer}>
        <View style={style.detail}>
          <Text style={style.payeeText}>{payee}</Text>
          <Text style={style.dateText}>{date}</Text>
        </View>
        <View>
          <Text
            style={[
              style.amountText,
              {
                color:
                  type === TransactionConstant.TransactionType.INCOME
                    ? Colors.GREEN
                    : Colors.RED,
              },
            ]}>
            {`$${amount.toFixed(2)}`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    width: 325,
    height: 63,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1.2,
    height: 48,
    borderRadius: 50 / 2,
    backgroundColor: Colors.LIGHT_GRAY,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  detailContainer: {
    flex: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    marginLeft: 20,
  },
  detail: {flex: 1, paddingRight: 5},
  payeeText: {
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
    fontSize: Typography.FONT_SIZE_15,
  },
  dateText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_11,
  },
  amountText: {
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
    fontSize: Typography.FONT_SIZE_15,
  },
});

export default TransactionItem;
