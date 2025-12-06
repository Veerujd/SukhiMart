from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def products():
    return render_template('products.html', category="All Products")

@app.route('/category/<category_name>')
def category_products(category_name):
    # In a real app, you would filter products by category_name here
    return render_template('products.html', category=category_name)
def product_detail(id):
    return render_template('product_detail.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

# Admin Routes
@app.route('/admin')
def admin_index():
    return render_template('admin/index.html')

@app.route('/admin/products')
def admin_products():
    return render_template('admin/products.html')

@app.route('/admin/categories')
def admin_categories():
    return render_template('admin/categories.html')

@app.route('/admin/orders')
def admin_orders():
    return render_template('admin/orders.html')

@app.route('/admin/customers')
def admin_customers():
    return render_template('admin/customers.html')

if __name__ == '__main__':
    app.run(debug=True)
