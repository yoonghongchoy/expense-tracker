import React from 'react';
import {
  Button,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {NavigationConstant, TransactionConstant} from '../../constants';
import {Colors} from '../../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-native-date-picker';
import {
  editTransaction,
  EditTransactionPayload,
} from '../../redux/actions/transaction';
import {connect} from 'react-redux';
import {DispatchType} from '../../redux';
import {EditTransactionScreenNavigationProps} from '../../screens/edit-transaction';

type EditTransactionFormProps = {
  navigation: EditTransactionScreenNavigationProps;
  id: number;
  payee: string;
  type: TransactionConstant.TransactionType;
  category: TransactionConstant.CategoryType;
  date: string;
  amount: number;
  editTransaction: (newTransaction: EditTransactionPayload) => void;
};

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    editTransaction: (newTransaction: EditTransactionPayload) =>
      dispatch(editTransaction(newTransaction)),
  };
};

const EditTransactionForm = ({
  navigation,
  id,
  payee,
  type,
  category,
  date,
  amount,
  editTransaction,
}: EditTransactionFormProps) => {
  const [newPayee, setNewPayee] = React.useState(payee);
  const [newType, setNewType] = React.useState(type);
  const [open, setOpen] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState(category);
  const [newDate, setNewDate] = React.useState(new Date(date));
  const [show, setShow] = React.useState(false);
  const [newAmount, setNewAmount] = React.useState(amount.toFixed(2));

  const handleSubmit = () => {
    const newTransaction: EditTransactionPayload = {
      id,
      payee: newPayee,
      type: newType,
      category: newCategory,
      date: newDate.toLocaleDateString(),
      amount: Number(Number(newAmount).toFixed(2)),
    };

    editTransaction(newTransaction);
    navigation.navigate(NavigationConstant.AppScreens.TRANSACTION, {
      id,
      payee: newPayee,
      type: newType,
      category: newCategory,
      date: newDate.toLocaleDateString(),
      amount: Number(Number(newAmount).toFixed(2)),
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        <View style={style.formContainer}>
          <Text style={style.inputText}>Payee</Text>
          <TextInput
            style={style.input}
            value={newPayee}
            onChangeText={setNewPayee}
            placeholder={'eg. Salary'}
          />
          <Text style={style.inputText}>Transaction type</Text>
          <View style={style.buttonGroup}>
            <Button
              title="Income"
              onPress={() =>
                setNewType(TransactionConstant.TransactionType.INCOME)
              }
              color={Colors.GREEN}
            />
            <Button
              title="Expense"
              onPress={() =>
                setNewType(TransactionConstant.TransactionType.EXPENSE)
              }
              color={Colors.RED}
            />
          </View>
          <Text style={style.inputText}>Category</Text>
          <DropDownPicker
            open={open}
            value={newCategory}
            items={TransactionConstant.CategoryDropdown}
            setValue={setNewCategory}
            setOpen={setOpen}
          />
          <Text style={style.inputText}>Date</Text>
          <View style={style.date}>
            <Text>{newDate.toLocaleDateString()}</Text>
            <Pressable onPress={() => setShow(!show)}>
              <FontAwesomeIcon icon={faCalendar} />
            </Pressable>
          </View>
          {show && (
            <DatePicker
              date={newDate}
              onDateChange={setNewDate}
              mode="date"
              style={{width: 250}}
            />
          )}
          <Text style={style.inputText}>Amount</Text>
          <TextInput
            style={style.input}
            value={newAmount}
            onChangeText={text => setNewAmount(text)}
            keyboardType={'numeric'}
            placeholder={'eg. 0.00'}
          />
          <View style={style.btnContainer}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formContainer: {
    width: 300,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 60,
    padding: 20,
  },
  inputText: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 30,
    borderBottomWidth: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    backgroundColor: Colors.WHITE,
    marginTop: 20,
  },
});

export default connect(null, mapDispatchToProps)(EditTransactionForm);
