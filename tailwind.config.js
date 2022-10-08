module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			display: ['Inter', 'sans-serif'],
			body: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				'primary': '#4CA0FC',
				'error': '#F20000',
				'links': '#0369D9',
				'success': '#25CD36',
				'gray-medium': '#A7A7A7',
				'gray-medium-light': '#C2C2C2',
				'gray-light': '#DBDBDB',
				'gray-extra-light': '#F1F1F1',
				'primary-bg': '#eef6ff',
				'warning': '#FFD910',
				'gray-extra-light-bg': '#FCFCFC'
			},
			fontSize: {
				14: '14px',
			},
			backgroundColor: {
				'main-bg': '#FAFBFB',
				'main-dark-bg': '#20232A',
				'secondary-dark-bg': '#33373E',
				'light-gray': '#F7F7F7',
				'half-transparent': 'rgba(0, 0, 0, 0.5)',
			},
			borderWidth: {
				1: '1px',
			},
			borderColor: {
				color: 'rgba(0, 0, 0, 0.1)',
			},
			width: {
				400: '400px',
				760: '760px',
				780: '780px',
				800: '800px',
				1000: '1000px',
				1200: '1200px',
				1400: '1400px',
			},
			height: {
				80: '80px',
			},
			minHeight: {
				590: '590px',
			},
		},
	},
	plugins: [],
};