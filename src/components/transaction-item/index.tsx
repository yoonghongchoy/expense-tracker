import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TransactionConstant} from '../../constants';
import {Colors, Typography} from '../../styles';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';

type TransactionItemProps = {
  payee: string;
  type: string;
  category: string;
  date: string;
  amount: number;
};

const TransactionItem = ({
  payee,
  type,
  category,
  date,
  amount,
}: TransactionItemProps) => {
  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <FontAwesomeIcon icon={faUtensils} size={23} />
      </View>
      <View style={style.detailContainer}>
        <View style={{flex: 1, paddingRight: 5}}>
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
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 325,
    height: 50,
    marginBottom: 20,
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
