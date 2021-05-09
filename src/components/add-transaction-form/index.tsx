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
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../styles';
import {connect} from 'react-redux';
import {NavigationConstant, TransactionConstant} from '../../constants';
import DatePicker from 'react-native-date-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {
  addTransaction,
  AddTransactionPayload,
} from '../../redux/actions/transaction';
import {DispatchType} from '../../redux';
import {AddTransactionScreenNavigatorProps} from '../../screens/add-transaction';

type AddTransactionFormProps = {
  navigation: AddTransactionScreenNavigatorProps;
  addTransaction: (newTransaction: AddTransactionPayload) => void;
};

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addTransaction: (newTransaction: AddTransactionPayload) =>
      dispatch(addTransaction(newTransaction)),
  };
};

const AddTransactionForm = ({
  navigation,
  addTransaction,
}: AddTransactionFormProps) => {
  const [payee, setPayee] = React.useState('');
  const [type, setType] = React.useState(
    TransactionConstant.TransactionType.INCOME,
  );
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState(
    TransactionConstant.CategoryType.AUTOMOBILE,
  );
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [amount, setAmount] = React.useState('');

  const handleSubmit = () => {
    const newTransaction: AddTransactionPayload = {
      payee,
      type,
      category,
      date: date.toLocaleDateString(),
      amount: Number(Number(amount).toFixed(2)),
    };
    addTransaction(newTransaction);
    navigation.navigate(NavigationConstant.AppScreens.DAILY);

    // Reset after submit
    setPayee('');
    setType(TransactionConstant.TransactionType.INCOME);
    setCategory(TransactionConstant.CategoryType.AUTOMOBILE);
    setDate(new Date());
    setAmount('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        <View style={style.formContainer}>
          <Text style={style.inputText}>Payee</Text>
          <TextInput
            style={style.input}
            value={payee}
            onChangeText={setPayee}
            placeholder={'eg. Salary'}
          />
          <Text style={style.inputText}>Transaction type</Text>
          <View style={style.buttonGroup}>
            <Button
              title="Income"
              onPress={() =>
                setType(TransactionConstant.TransactionType.INCOME)
              }
              color={Colors.GREEN}
            />
            <Button
              title="Expense"
              onPress={() =>
                setType(TransactionConstant.TransactionType.EXPENSE)
              }
              color={Colors.RED}
            />
          </View>
          <Text style={style.inputText}>Category</Text>
          <DropDownPicker
            open={open}
            value={category}
            items={TransactionConstant.CategoryDropdown}
            setValue={setCategory}
            setOpen={setOpen}
          />
          <Text style={style.inputText}>Date</Text>
          <View style={style.date}>
            <Text>{date.toLocaleDateString()}</Text>
            <Pressable onPress={() => setShow(!show)}>
              <FontAwesomeIcon icon={faCalendar} />
            </Pressable>
          </View>
          {show && (
            <DatePicker
              date={date}
              onDateChange={setDate}
              mode="date"
              style={{width: 250}}
            />
          )}
          <Text style={style.inputText}>Amount</Text>
          <TextInput
            style={style.input}
            value={amount}
            onChangeText={text => setAmount(text)}
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

export default connect(null, mapDispatchToProps)(AddTransactionForm);
