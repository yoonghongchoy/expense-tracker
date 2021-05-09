import React from 'react';
import {TransactionConstant} from '../../constants';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Typography} from '../../styles';

type TransactionDetailProps = {
  payee: string;
  type: TransactionConstant.TransactionType;
  date: string;
  amount: number;
};

const TransactionDetail = ({
  payee,
  type,
  date,
  amount,
}: TransactionDetailProps) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.nameText}>Payee</Text>
        <Text style={style.valueText}>{payee}</Text>
      </View>
      <View style={style.horizontalDivider} />
      <View style={style.midContainer}>
        <View>
          <Text style={style.nameText}>Transaction type</Text>
          <Text style={style.valueText}>
            {type === TransactionConstant.TransactionType.INCOME
              ? 'Income'
              : 'Expense'}
          </Text>
        </View>
        <View style={style.verticalDivider} />
        <View>
          <Text style={style.nameText}>Date</Text>
          <Text style={style.valueText}>{date}</Text>
        </View>
      </View>
      <View style={style.horizontalDivider} />
      <View>
        <Text style={style.nameText}>Amount</Text>
        <Text style={style.amountText}>${amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 330,
    height: 340,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 40,
  },
  midContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  verticalDivider: {borderRightWidth: 1, borderColor: Colors.DARK_GRAY},
  horizontalDivider: {
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    marginTop: 20,
    marginBottom: 20,
  },
  nameText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
    marginBottom: 8,
  },
  valueText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_20,
  },
  amountText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_36,
  },
});

export default TransactionDetail;
