import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Create from "@components/Create";
import Read from "@components/Read";
import Update from "@components/Update";
import Delete from "@components/Delete";
import { CreateLogo, ReadLogo, UpdateLogo, DeleteLogo } from "./MenuIcons"; // Define your icon components

const menuItems = [
	{ text: "Create", icon: <CreateLogo />, component: <Create /> },
	{ text: "Read", icon: <ReadLogo />, component: <Read /> },
	{ text: "Update", icon: <UpdateLogo />, component: <Update /> },
	{ text: "Delete", icon: <DeleteLogo />, component: <Delete /> }
];

const drawerWidth = 240;

function CRUDContainer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [selectedMenu, setSelectedMenu] = React.useState(menuItems[0]);

	const handleMenuItemClick = index => {
		setSelectedMenu(menuItems[index]);
		setMobileOpen(false);
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{menuItems.map((item, index) => (
					<ListItem
						key={item.text}
						button
						selected={selectedMenu === item}
						onClick={() => handleMenuItemClick(index)}
						disablePadding
					>
						<ListItemButton>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` }
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Responsive drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth
						}
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth
						}
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` }
				}}
			>
				<Toolbar />
				<div>{selectedMenu.component}</div>
			</Box>
		</Box>
	);
}

CRUDContainer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	// eslint-disable-next-line react/require-default-props
	window: PropTypes.func
};

export default CRUDContainer;
