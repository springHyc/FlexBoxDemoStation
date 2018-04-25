import React, { Component } from "react";
import "./FlexPropertiesContainer.css";

const properties = {
  "flex-direction": {
    title: "flex-direction属性决定主轴的方向(即子元素的排列方向)",
    value: [
      {
        id: "row",
        defaultChecked: true,
        title: "主轴为水平方向，起点在左端"
      },
      {
        id: "row-reverse",
        defaultChecked: false,
        title: "主轴为水平方向，起点在右端"
      },
      {
        id: "column",
        defaultChecked: false,
        title: "主轴为垂直方向，起点在上沿"
      },
      {
        id: "column-reverse",
        defaultChecked: false,
        title: "主轴为垂直方向，起点在下沿"
      }
    ]
  },
  "justify-content": {
    title: "justify-content属性定义了项目在主轴上的对齐方式",
    value: [
      {
        id: "flex-start",
        defaultChecked: true,
        title: "(默认值)左对齐"
      },
      {
        id: "flex-end",
        defaultChecked: false,
        title: "右对齐"
      },
      {
        id: "center",
        defaultChecked: false,
        title: "居中"
      },
      {
        id: "space-between",
        defaultChecked: false,
        title: "两端对齐，项目之间的间隔都相等"
      },
      {
        id: "space-around",
        defaultChecked: false,
        title:
          "每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。"
      }
    ]
  },
  "align-items": {
    title: "align-items属性定义项目在交叉轴上如何对齐",
    value: [
      {
        id: "flex-start",
        defaultChecked: false,
        title: "交叉轴的起点对齐"
      },
      {
        id: "flex-end",
        defaultChecked: false,
        title: "交叉轴的终点对齐"
      },
      {
        id: "center",
        defaultChecked: false,
        title: "交叉轴的中点对齐"
      },
      {
        id: "baseline",
        defaultChecked: false,
        title: "项目的第一行文字的基线对齐"
      },
      {
        id: "stretch",
        defaultChecked: true,
        title: "主轴为垂直方向，起点在下沿"
      }
    ]
  },
  "flex-wrap": {
    title:
      '默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行，以及它的换行方式。',
    value: [
      {
        id: "nowrap",
        defaultChecked: true,
        title: "(默认)不换行"
      },
      {
        id: "wrap",
        defaultChecked: false,
        title: "换行，第一行在最上方"
      },
      {
        id: "wrap-reverse",
        defaultChecked: false,
        title: "换行，第一行在最下方"
      }
    ]
  },
  "align-content": {
    title:
      " align-content属性用于修改flex-wrap属性的行为。类似于align-item,但它不是设置弹性元素的对齐，而是设置各个行的对齐。如果弹性元素只有一行，该属性不起作用。",
    value: [
      {
        id: "flex-start",
        defaultChecked: false,
        title: "与交叉轴的起点对齐"
      },
      {
        id: "flex-end",
        defaultChecked: false,
        title: "与交叉轴的终点对齐"
      },
      {
        id: "center",
        defaultChecked: false,
        title: "与交叉轴的中点对齐"
      },
      {
        id: "space-between",
        defaultChecked: false,
        title: "与交叉轴两端对齐，轴线之间的间隔平均分布"
      },
      {
        id: "space-around",
        defaultChecked: false,
        title:
          "每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍"
      },
      {
        id: "stretch",
        defaultChecked: true,
        title: "(默认值)轴线占满整个交叉轴"
      }
    ]
  }
};
export default class FlexPropertiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: {
        flexDirection: "row"
      }
    };
  }
  componentDidMount() {
    this.props.handleProperties(this.state.properties); // 向它的父组件传递
  }
  handleProperty(property) {
    if (this.state.properties) {
      const properties = this.state.properties;
      const newProperties = { ...properties, ...property };
      this.setState({ properties: newProperties });
      this.props.handleProperties(newProperties); // 向它的父组件传递
    }
  }
  render() {
    return (
      <div className="FlexPropertiesContainer">
        <div className="ParentFlexPropertie">
          <h4 className="FlexPropertiesContainer-title">
            父Flex属性 - Flex容器
          </h4>
          <div className="propeties">
            <Property
              handleProperty={this.handleProperty.bind(this)}
              property={properties["flex-direction"]}
              propertyTitle="flexDirection"
            />
            <Property
              handleProperty={this.handleProperty.bind(this)}
              property={properties["justify-content"]}
              propertyTitle="justifyContent"
            />
            <Property
              handleProperty={this.handleProperty.bind(this)}
              property={properties["align-items"]}
              propertyTitle="alignItems"
            />
            <Property
              handleProperty={this.handleProperty.bind(this)}
              property={properties["flex-wrap"]}
              propertyTitle="flexWrap"
            />
            <Property
              handleProperty={this.handleProperty.bind(this)}
              property={properties["align-content"]}
              propertyTitle="alignContent"
            />
          </div>
          <div />
        </div>
        <div className="ChildrenFlexProperties">
          <h4 className="FlexPropertiesContainer-title">
            子Flex属性 - Flex 元素
          </h4>
          <div className="ChildrenFlexProperties-properties">
            <span>弹性子元素有6个属性：</span>
            <ul>
              <li>order: integer</li>
              <li>flex-grow: integer 默认 0</li>
              <li>flex-shrink: integer 默认 1</li>
              <li>flex-basis: length | auto 默认 auto</li>
              <li>flex </li>
              <li>
                align-self : auto | flex-start | flex-end | center | baseline |
                stretch
              </li>
            </ul>
            <span>
              可以在右侧demo中，为每个item来设置每个属性的值，来查看每个属性值对布局的影响
            </span>
          </div>
        </div>
      </div>
    );
  }
}

class Property extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Property">
        <label className="Property-title" title={this.props.property.title}>
          {this.props.propertyTitle}
        </label>
        {this.props.property.value.map(item => {
          return (
            <div className="Property-item" key={item.id}>
              <input
                type="radio"
                name={this.props.propertyTitle}
                id={item.id}
                defaultChecked={item.defaultChecked}
                onChange={e =>
                  this.props.handleProperty({
                    [this.props.propertyTitle]: e.target.id
                  })
                }
              />
              <label title={item.title}>{item.id}</label>
            </div>
          );
        })}

        {/* <div className="Property-item">
          <input
            type="radio"
            name="flex-direction"
            id="row-reverse"
            onChange={e =>
              this.props.handleProperty({ flexDirection: e.target.id })
            }
          />
          <label title="主轴为水平方向，起点在右端" for="fd2">
            row-reverse
          </label>
        </div>
        <div className="Property-item">
          <input
            type="radio"
            name="flex-direction"
            id="column"
            onChange={e =>
              this.props.handleProperty({ flexDirection: e.target.id })
            }
          />
          <label title="主轴为水平方向，起点在右端" for="fd3">
            column
          </label>
        </div>
        <div className="Property-item">
          <input
            type="radio"
            name="flex-direction"
            id="column-reverse"
            onChange={e =>
              this.props.handleProperty({ flexDirection: e.target.id })
            }
          />
          <label title="主轴为垂直方向，起点在下沿" for="fd4">
            column-reverse
          </label>
        </div> */}
      </div>
    );
  }
}
