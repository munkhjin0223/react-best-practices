import React from "react";
import { PRODUCTS } from "./constants";

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const { filterText, inStockOnly, products } = this.props;

    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }

      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    const { filterText, inStockOnly } = this.props;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange} /> Only
          show products in stock
        </p>
      </form>
    );
  }
}

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText,
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly,
    });
  };

  render() {
    const { filterText, inStockOnly } = this.state;

    return (
      <>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
      </>
    );
  }
}
