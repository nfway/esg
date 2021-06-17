module.exports = {
  zh: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' }, 
			{ text: 'ESG介绍', 
			  ariaLabel: '关于ESG的介绍',
			  items: [
					{ text: 'ESG是什么', link: '/about/ESG/' },
					{ text: 'ESG发展史', link: '/about/ESG-history/'},
					{ text: 'ESG投资史', link: '/about/ESG-investment-history/'}
			  
			  ]	
			}, 
			{ text: 'ESG标准', 
			  ariaLabel:'ESG的标准有哪些',
			  items: [
					{ text: 'ESG标准',   link: '/criteria/ESG-Criteria/' },
					{ text: 'ESG在中国', link: '/criteria/ESG-China/'},
					{ text: '港交所ESG', link: '/criteria/hkex-ESG/'},
					{ text: '政策更新',  link: '/criteria/ESG-update/'}
			  ]		
			}, 
			{ text: 'ESG评级', 
			  ariaLabel: '关于ESG的应用',
			  items:[
					{ text: 'ESG评级', link: '/apply/ESG-rating/'},
					{ text: 'ESG投资', link: '/apply/ESG-investment/'},
					{ text: '绿色债券', link: '/apply/Green-bond-definition-priciples-reporting/'},
					{ text: '投资者需求', link: '/apply/ESG-investor-need/'}
			  ]
			}, 
			{ text: '如何写ESG报告', link: '/how/ESG-guide/' }, 		
           			
            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '帮助/关于',  //默认显示        
                ariaLabel: '需帮助/服务？',   //用于识别的label
                items: [
                     { text: 'ESG服务', link: '/contact/' },
					{ text: 'CSR服务', link: 'https://3feng.im' },  
            		{ text: '公益创投', link: 'https://lib.3feng.im/venture-philanthropy/' }, 
					{ text: '基金会咨询', link: 'https://lib.3feng.im/'},
					{ text: '作者简历', link: 'https://zhou.3feng.im/'}
                ]
            },
            //{ text: '功能演示', link: '/pages/folder1/test3.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            //{ text: 'Github', link: 'https://github.com/dwanda' },
        ],
};
