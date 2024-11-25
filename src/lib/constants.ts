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
	CHANGE_PASSWORD: 'change-password',

	// Customer
	CUSTOMERS: 'customers',

	// Vendor
	VENDORS: 'vendors',
	CREATE_VENDOR: 'create-vendor',
	GET_VENDOR: 'get_vendor',
	UPDATE_VENDOR: 'update-vendor',


	// Group of goods
	GROUP_OF_GOODS: 'group-of-goods',


	// Goods
	GOODS: 'goods',


	// Sell
	SELLS: 'sells',


	// Purchase
	PURCHASES: 'purchases',



	// Payment
	PAYMENT: 'payment',
	
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