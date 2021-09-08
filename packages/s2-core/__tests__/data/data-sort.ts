export const originData = [
  {
    area: '东北',
    province: '吉林',
    city: '白山',
    type: '办公用品',
    sub_type: '纸张',
    cost: '2',
    price: '8',
  },
  {
    area: '东北',
    province: '吉林',
    city: '白山',
    type: '办公用品',
    sub_type: '笔',
    cost: '3',
    price: '9',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '抚顺',
    type: '办公用品',
    sub_type: '纸张',
    cost: '2',
    price: '9',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '抚顺',
    type: '办公用品',
    sub_type: '笔',
    cost: '5',
    price: '12',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '抚顺',
    type: '家具产品',
    sub_type: '办公装饰品',
    cost: '6',
    price: '4',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '抚顺',
    type: '家具产品',
    sub_type: '餐桌',
    cost: '5',
    price: '1',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '朝阳',
    type: '家具产品',
    sub_type: '办公装饰品',
    cost: '32',
    price: '4',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '朝阳',
    type: '办公用品',
    sub_type: '纸张',
    cost: '52',
    price: '4',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '朝阳',
    type: '办公用品',
    sub_type: '笔',
    cost: '52',
    price: '4',
  },
  {
    area: '东北',
    province: '辽宁',
    city: '朝阳',
    type: '家具产品',
    sub_type: '餐桌',
    cost: '5',
    price: '2',
  },
  {
    area: '东北',
    province: '吉林',
    city: '白山',
    type: '家具产品',
    sub_type: '办公装饰品',
    cost: '4',
    price: '4',
  },
  {
    area: '东北',
    province: '吉林',
    city: '白山',
    type: '家具产品',
    sub_type: '餐桌',
    cost: '8',
    price: '14',
  },
  {
    area: '东北',
    province: '吉林',
    city: '丹东',
    type: '家具产品',
    sub_type: '办公装饰品',
    cost: '6',
    price: '2',
  },
  {
    area: '东北',
    province: '吉林',
    city: '丹东',
    type: '家具产品',
    sub_type: '餐桌',
    cost: '14',
    price: '9',
  },
  {
    area: '东北',
    province: '吉林',
    city: '丹东',
    type: '办公用品',
    sub_type: '纸张',
    cost: '6',
    price: '1',
  },
  {
    area: '东北',
    province: '吉林',
    city: '丹东',
    type: '办公用品',
    sub_type: '笔',
    cost: '64',
    price: '1',
  },
  {
    area: '中南',
    province: '广东',
    city: '汕头',
    type: '办公用品',
    sub_type: '纸张',
    cost: '6',
    price: '5',
  },
  {
    area: '中南',
    province: '广东',
    city: '汕头',
    type: '办公用品',
    sub_type: '笔',
    cost: '64',
    price: '52',
  },
  {
    area: '中南',
    province: '广东',
    city: '广州',
    type: '办公用品',
    sub_type: '纸张',
    cost: '6',
    price: '5',
  },
  {
    area: '中南',
    province: '广东',
    city: '广州',
    type: '办公用品',
    sub_type: '笔',
    cost: '-',
    price: '5',
  },
  {
    area: '中南',
    province: '广东',
    city: '汕头',
    type: '家具产品',
    sub_type: '办公装饰品',
    cost: '2',
    price: '3',
  },
  {
    area: '中南',
    province: '广东',
    city: '汕头',
    type: '家具产品',
    sub_type: '餐桌',
    cost: '32',
    price: '3',
  },
  {
    area: '中南',
    province: '广东',
    city: '广州',
    type: '家具产品',
    sub_type: '办公装饰品',
    cost: '42',
    price: '13',
  },
  {
    area: '中南',
    province: '广东',
    city: '广州',
    type: '家具产品',
    sub_type: '餐桌',
    cost: '2',
    price: '34',
  },
];

export const dataCfg = {
  fields: {
    rows: ['area', 'province', 'city'],
    columns: ['type', 'sub_type'],
    values: ['cost', 'price'],
  },
  meta: [
    {
      field: 'price',
      name: '价格',
    },
    {
      field: 'city',
      name: '城市',
    },
    {
      field: 'area',
      name: '区域',
    },
    {
      field: 'province',
      name: '省份',
    },
    {
      field: 'cost',
      name: '成本',
    },
  ],
  data: originData,
};

export const totalData = [
  {
    price: '100',
    cost: '200',
  },
  {
    area: '东北',
    cost: '14',
    price: '24',
  },
  {
    area: '东北',
    type: '办公用品',
    cost: '23',
    price: '27',
  },
  {
    area: '东北',
    type: '办公用品',
    sub_type: '笔',
    cost: '26',
    price: '39',
  },
  {
    area: '东北',
    province: '吉林',
    cost: '30',
    price: '40',
  },
  {
    area: '东北',
    province: '辽宁',
    cost: '31',
    price: '39',
  },
  {
    area: '东北',
    province: '吉林',
    city: '白山',
    cost: '10',
    price: '20',
  },
  {
    area: '东北',
    province: '吉林',
    city: '丹东',
    cost: '12',
    price: '21',
  },
  {
    area: '东北',
    province: '吉林',
    type: '办公用品',
    sub_type: '笔',
    cost: '11',
    price: '12',
  },
  {
    area: '东北',
    province: '吉林',
    type: '办公用品',
    sub_type: '纸张',
    cost: '10',
    price: '13',
  },
  {
    type: '办公用品',
    cost: '22',
    price: '34',
  },
  {
    type: '家具产品',
    cost: '55',
    price: '66',
  },
  {
    area: '东北',
    type: '办公用品',
    province: '辽宁',
    city: '抚顺',
    cost: '1',
    price: '3',
  },
  {
    area: '东北',
    type: '办公用品',
    province: '辽宁',
    city: '朝阳',
    cost: '33',
    price: '22',
  },
];