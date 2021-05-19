module.exports = {
  zh: {
            '/about/':[         
                {
                    title: 'ESG介绍',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['/about/ESG.md', 'ESG是什么'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['/about/ESG-history.md', 'ESG发展史'],
						['/about/ESG-investment-history.md', 'ESG投资史']
                    ]
                },
				       ],
                '/criteria/':[ {
                    title: 'ESG标准',
                    collapsable: false, 
					sidebarDepth: 1, 
                    children: [
                        ['/criteria/ESG-Criteria', 'ESG标准'],
						['/criteria/ESG-China','ESG在中国'],
						['/criteria/hkex-ESG','港交所ESG'],
						['/criteria/hkex-new-esg-guide-2019','港交所ESG解读'],
						['/criteria/ESG-update','ESG政策更新']
                    ]
                },
				             ],
				 '/apply/':[
				 {
                    title: 'ESG应用',
                    collapsable: false, 
					sidebarDepth: 1, 
                    children: [
                        ['/apply/ESG-as-supervision.md', '以ESG实现监管'],
						['/apply/ESG-rating.md','ESG评级'],
						['/apply/ESG-investment.md','作为投资工具'],
						['/apply/ESG-communicate.md','作为沟通工具'],
						['/apply/ESG-investment-and-social-value','ESG投资与价值'],
						['/apply/ESG-research-reports','ESG研究报告']
                    ]
                },
				          ],
				'/how/':[
				{
			        title: 'ESG披露实践',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['/how/ESG-guide.md', 'ESG披露指南'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['/how/contact', '帮助']
                             ]
			}
			        ]
				
      
			
            
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
		},
};
