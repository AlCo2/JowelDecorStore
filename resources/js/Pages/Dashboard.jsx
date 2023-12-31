import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BsBox, BsPerson } from 'react-icons/bs';
import Table from '@/Components/Table';
import ProductTable from '@/Components/ProductTable';
import UserTable from '@/Components/UserTable';
import AddProduct from '@/Components/AddProduct';
import CategoryTable from '@/Components/CategoryTable';
import AddCategory from '@/Components/AddCategory';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

export default function Dashboard({ auth }) {
    const [value, setValue] = React.useState(0);
    const { users } = usePage().props;
    const { products } = usePage().props;
    const { categories } = usePage().props;
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab icon={<BsPerson/>} iconPosition='start' label="Users" {...a11yProps(0)} />
                            <Tab icon={<BsBox/>} iconPosition='start' label="Product" {...a11yProps(1)} />
                            <Tab label="Categories" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <UserTable data={users}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <AddProduct/>
                            <ProductTable data={products} categories={categories}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <AddCategory/>
                            <CategoryTable data={categories}/>
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
