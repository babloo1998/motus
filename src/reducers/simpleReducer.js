const initialState = {
  company_name: '',
  alias:'',
  checked:false,
  industry_type:'',
  Account_manager:'',
  country:'',
  startDate: new Date(),
  Address_line1:'',
  Address_line2:'',
  zip:'',
  city:'',
  phone:'',
  states:'',
}

export default (state = initialState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {...state, ...action.payload }
     default:
      return state
    }
   }