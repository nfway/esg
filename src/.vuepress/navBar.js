module.exports = {
  zh: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' }, 
			{ text: 'ESG 介绍', link: '/about/ESG/' }, 
			{ text: 'ESG 标准', link: '/criteria/ESG-Criteria/' }, 
			{ text: 'ESG 应用', link: '/apply/ESG-rating/' }, 
			{ text: 'ESG披露', link: '/how/ESG-guide/' }, 		
           			
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
