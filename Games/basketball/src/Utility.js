/**
 * Created by Administrator on 14-12-9.
 */
//��������
var g_arrWeights= [
    ["#btn_n_100.png", "#btn_s_100.png", 100],
    ["#btn_n_200.png", "#btn_s_200.png", 200],
    ["#btn_n_300.png", "#btn_s_300.png", 300],
    ["#btn_n_500.png", "#btn_s_500.png", 500],
    ["#btn_n_max.png", "#btn_s_max.png", 0]
];
//Ĭ������ͼƬ
var g_NormalPicID= 0;
//ѡ�к������ͼƬ
var g_SelectPicID= 1;
//��ֵ
var g_valueID= 2;

//���ӵ���������
var g_arrNets= [
    [cc.p(0.3, 0.81), 0.6, 1.25],
    [cc.p(0.275, 0.66), 0.8, 1.4],
    [cc.p(0.23, 0.48), 1, 1.65]
];

var g_arrNetsInI= [
    ["#score_1.png", 5, cc.p(0.75, 2.75)],
    ["#score_2.png", 3, cc.p(0.75, 2.75)],
    ["#score_1.png", 5, cc.p(0.75, 2.75)],
    ["#score_3.png", 3, cc.p(0.6, 1.8)],
    ["#score_4.png", 2, cc.p(0.6, 1.8)],
    ["#score_3.png", 3, cc.p(0.6, 1.8)],
    ["#score_5.png", 1.5, cc.p(0.5, 1.4)],
    ["#score_6.png", 0.5, cc.p(0.5, 1.4)],
    ["#score_5.png", 1.5, cc.p(0.5, 1.4)]
];

//��ǰʣ�����
var g_iCurGold= 1000;
//��ҵ���ע
var g_iWeights= 0;