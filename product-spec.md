# Sauce Demo Product Specification

## 1. Overview
Sauce Demo is a sample e-commerce web application for testing and automation practice. It features multiple user roles, a product catalog, cart, checkout, and various error and edge case scenarios.

## 2. User Roles
- **standard_user**: Full access to all features and normal flows.
- **locked_out_user**: Cannot log in; receives a locked-out error message.
- **problem_user**: Experiences UI/image glitches and broken elements.
- **performance_glitch_user**: Experiences slow loading and performance issues.
- **error_user**: (if present) Used for error scenario testing.

## 3. Application Modules & Features

### 3.1 Login Page
- Username and password fields
- Login button
- Error messages for invalid credentials, locked out, or missing fields
- Accepts multiple user types

### 3.2 Inventory Page (Product List)
- Displays a grid/list of products (name, image, price, description, Add to cart button)
- Product sorting (Name A-Z, Z-A, Price low-high, high-low)
- Cart icon with item count
- Menu (burger) button
- Product image and name are clickable (navigate to product details)

### 3.3 Product Details Page
- Product image, name, price, description
- Add to cart/Remove button
- Back to products button

### 3.4 Cart Page
- List of added products (name, price, quantity, remove button)
- Continue shopping button
- Checkout button

### 3.5 Checkout: Step One
- Input fields: First Name, Last Name, Zip/Postal Code
- Cancel and Continue buttons
- Error messages for missing/invalid input

### 3.6 Checkout: Step Two (Overview)
- List of items, item total, tax, total
- Cancel and Finish buttons

### 3.7 Checkout: Complete
- Confirmation message (Thank you for your order!)
- Back Home button

### 3.8 Menu (Burger Menu)
- All Items, About, Logout, Reset App State
- Menu overlays on left

### 3.9 Logout
- Returns to login page

### 3.10 Error Handling
- Locked out user error
- Invalid credentials error
- Missing input error
- Problem user: broken images/UI
- Performance user: slow loading

## 4. User-Specific Behaviors
- **standard_user**: All features work as expected.
- **locked_out_user**: Login blocked, error shown.
- **problem_user**: Broken images, UI glitches on inventory and product pages.
- **performance_glitch_user**: Noticeable delays on inventory and product pages.

## 5. Edge Cases & Additional Flows
- Sorting and filtering products
- Adding/removing items from cart in all screens
- Navigating back and forth between pages
- Resetting app state (clears cart, resets UI)
- Logging out from any page
- Attempting checkout with empty cart
- Attempting checkout with missing info

## 6. Non-Functional
- Responsive layout
- Performance (for performance_glitch_user)
- Error messages and accessibility

---

This product spec covers all modules, flows, and user-specific behaviors in Sauce Demo. Use this as the basis for writing comprehensive test cases.
