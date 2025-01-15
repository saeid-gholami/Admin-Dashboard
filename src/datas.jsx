let xAxisData = [
    { name: 'Jan', sale: 670_000 },
    { name: 'Feb', sale: 500_000 },
    { name: 'Mar', sale: 830_000 },
    { name: 'Apr', sale: 670_000 },
    { name: 'May', sale: 500_000 },
    { name: 'Jun', sale: 300_000 },
    { name: 'Jul', sale: 670_000 },
    { name: 'Aug', sale: 500_000 },
    { name: 'Sep', sale: 670_000 },
    { name: 'Oct', sale: 170_000 },
    { name: 'Nov', sale: 670_000 },
    { name: 'Dec', sale: 500_000 },
]

let newMembers = [
    { id: 1, username: 'Saeid Gholami', title: 'Software Engineer', img: 'images/Capture.JPG' },
    { id: 2, username: 'Sajad Babaei', title: 'Web Develper', img: 'images/Capture.JPG' },
    { id: 3, username: 'Mohammad Karimi', title: 'Hacker', img: 'images/Capture.JPG' },
    { id: 4, username: 'Milad ishbaz', title: 'Seo Engineer', img: 'images/Capture.JPG' },
]

const transactions = [
    {
        id: 1,
        customer: 'Saeid Gholami',
        date: '12 Jun 2022',
        amount: 199.99,
        status: 'Approved',
        img: 'images/Capture.JPG'
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: 200.02,
        status: 'Declined',
        img: 'images/Capture.JPG'
    },
    {
        id: 3,
        customer: 'Mohammad Qol',
        date: '28 May 2022',
        amount: 53.41,
        status: 'Pending',
        img: 'images/Capture.JPG'
    },
    {
        id: 4,
        customer: 'Sasan Moq',
        date: '1 Feb 2022',
        amount: 123.52,
        status: 'Approved',
        img: 'images/Capture.JPG'
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]


export { xAxisData, newMembers, transactions, productsData }