// Auth
export const URL_LOGIN = 'auth/login';




// Users
export const URL_GET_USERS = 'user';
export const URL_ME = URL_GET_USERS + '/me';
export const URL_CHANGE_PASSWORD = URL_ME + '/changePassword';



// Customer
export const URL_GET_CUSTOMERS = 'khachhang';
export const URL_CREATE_CUSTOMER = URL_GET_CUSTOMERS + '/createOne';
export const URL_UPDATE_CUSTOMER = URL_GET_CUSTOMERS + '/updateOne';
export const URL_DELETE_CUSTOMER = URL_GET_CUSTOMERS + '/deleteOne';
export const URL_GET_CONTACTS = URL_GET_CUSTOMERS + '/contacts';
export const URL_UPDATE_CONTACTS = URL_GET_CUSTOMERS + '/contacts/updateOne';
export const URL_DELETE_CONTACTS = URL_GET_CUSTOMERS + '/contacts/deleteOne';



// Vendor
export const URL_GET_VENDORS = 'nhacungcap';
export const URL_CREATE_VENDOR = URL_GET_VENDORS + '/createOne';
export const URL_UPDATE_VENDOR = URL_GET_VENDORS + '/updateOne';
export const URL_DELETE_VENDOR = URL_GET_VENDORS + '/deleteOne';





// Group of goods
export const URL_GET_GROUP_OF_GOODS = 'hangHoa/cat';
export const URL_CREATE_GROUP_OF_GOODS = URL_GET_GROUP_OF_GOODS + '/createOne';
export const URL_UPDATE_GROUP_OF_GOODS = URL_GET_GROUP_OF_GOODS + '/updateOne';
export const URL_DELETE_GROUP_OF_GOODS = URL_GET_GROUP_OF_GOODS + '/deleteOne';





// Goods
export const URL_GET_GOODS = 'hanghoa';
export const URL_CREATE_GOODS = URL_GET_GOODS + '/createOne';
export const URL_UPDATE_GOODS = URL_GET_GOODS + '/updateOne';
export const URL_DELETE_GOODS = URL_GET_GOODS + '/deleteOne';







// Order
export const URL_GET_ORDERS = 'order';







// PO
export const URL_GET_ALL_PO = 'po';








// Payment Request
export const URL_GET_PAYMENT_REQUEST = 'de-nghi-thanh-toan';