export const QUERIES = {
	// Auth
    LOGIN: 'login',
    AUTH: 'auth',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password',

	// User
    USERS: 'users',
	ME: 'me',
	GET_USER_BY_CODE: 'get-user-by-code',
	CHANGE_PASSWORD: 'change-password',
	ALL_ROLES: 'all-roles',
	DISABLE_USER: 'disable-user',
	CREATE_USER: 'create-user',
	UPDATE_USER: 'update-user',

	
	// Customer
	CUSTOMERS: 'customers',
	CREATE_CUSTOMER: 'create-customer',
	GET_CUSTOMER: 'get-customer',
	UPDATE_CUSTOMER: 'update-customer',
	GET_CUSTOMER_ADDRESS: 'get-customer-address',


	// Vendor
	VENDORS: 'vendors',
	CREATE_VENDOR: 'create-vendor',
	GET_VENDOR: 'get_vendor',
	UPDATE_VENDOR: 'update-vendor',


	// Group of goods
	GROUP_OF_GOODS: 'group-of-goods',
	CREATE_GROUP_OF_GOODS: 'create-group-of-goods',
	GET_GROUP_OF_GOODS: 'get-group-of-goods',
	UPDATE_GROUP_OF_GOODS: 'update-group-of-goods',


	// Goods
	GOODS: 'goods',
	CREATE_GOODS: 'create-goods',
	GET_GOODS: 'get-goods',
	UPDATE_GOODS: 'update-goods',


	// Sell
	SELLS: 'sells',
	ADD_SELL_DETAIL: 'add-sell-detail',
	CREATE_SELL: 'create-sell',
	GET_SELL: 'get-sell',
	UPDATE_SELL: 'update-sell',
	UPDATE_SELL_DETAIL: 'update-sell-detail',
	CREATE_MANY_SELL: 'create-many-sell',
	GET_SELL_DETAIL: 'get-sell-detail',


	// Purchase
	PURCHASES: 'purchases',



	// Payment
	PAYMENT: 'payment',



	// Inventory
	INVENTORY_STOCK: 'inventory-stock',
	INVENTORY_OUT: 'inventory-out',
	INVENTORY_IN: 'inventory-in',
}

export const LIST_ROLES = {
	SHIPPING_COORDINATOR: {
		code: 'SHIPPING_COORDINATOR',
		name: 'Vận chuyển',
	},
	INVENTORY_AUDITOR: {
		code: 'INVENTORY_AUDITOR',
		name: 'Kiểm kho',
	},
	ADMIN: {
		code: 'ADMIN',
		name: 'Admin',
	},
	REPORTER: {
		code: 'REPORTER',
		name: 'Báo cáo',
	},
	CS: {
		code: 'CS',
		name: 'CS',
	},
	CS_MANAGER: {
		code: 'CS_MANAGER',
		name: 'Quản lý CS',
	},
	ACCOUNTANT: {
		code: 'ACCOUNTANT',
		name: 'Kế toán',
	},
	DIRECTOR: {
		code: 'DIRECTOR',
		name: 'Giám đốc',
	},
	ACCOUNTANT_MANAGER: {
		code: 'ACCOUNTANT_MANAGER',
		name: 'Kế toán trưởng',
	},
	USER: {
		code: 'USER',
		name: 'Nhân viên',
	}
}

export const SELL_STATUS = {
	'Nháp': 'Nháp',
	'Chờ duyệt': 'Chờ duyệt',
	'Chờ thanh toán': 'Chờ thanh toán',
	'Đã thanh toán một phần': 'Đã thanh toán một phần',
	'Đã thanh toán 100%': 'Đã thanh toán 100%',
};

export const MAX_PAYLOAD_SIZE = 300;
export const MAX_PAYLOAD_ORDER_SIZE = 5;


export const EMAIL_REGEX = "@iesvietnam.com"