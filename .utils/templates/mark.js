/**
 * Todo.
 *
 * @description Todo.
 */

export const mark = ( pkg ) => {
	
	let data, collective, version, repoUrl, author, authorLink, contributors, contributorsLink

	data             = pkg.data
	collective       = data.extra.collective.name 
	author           = data.author.name 
	authorLink       = data.author.url 
	contributors     = data.contributors[0].name || ''
	contributorsLink = data.contributors[0].url || ''
	repoUrl          = data.repository.url 
	version          = data.version ? data.version : 'UNDEFINDED'

	return `
██████╗ ██╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗                     
██╔══██╗██║██╔════╝ ██╔════╝██╔═══██╗████╗  ██║                     
██████╔╝██║██║  ███╗█████╗  ██║   ██║██╔██╗ ██║                     
██╔═══╝ ██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║                     
██║     ██║╚██████╔╝███████╗╚██████╔╝██║ ╚████║                     
╚═╝     ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝                     
                                                                    
██████╗  ██████╗ ███████╗███████╗███████╗                           
██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔════╝                           
██████╔╝██║   ██║███████╗███████╗█████╗                             
██╔═══╝ ██║   ██║╚════██║╚════██║██╔══╝                             
██║     ╚██████╔╝███████║███████║███████╗                           
╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝                           
                                                                                                                                        
                                                                    
█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗                    
╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝                    
                                                                                                                                        
                                                                    
███████╗████████╗██╗   ██╗██╗     ███████╗ ██████╗ ██████╗ ████████╗
██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝ ██╔══██╗╚══██╔══╝
███████╗   ██║    ╚████╔╝ ██║     █████╗  ██║  ███╗██████╔╝   ██║   
╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ██║   ██║██╔═══╝    ██║   
███████║   ██║      ██║   ███████╗███████╗╚██████╔╝██║        ██║   
╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝ ╚═════╝ ╚═╝        ╚═╝                        
                                                
VERSION: 	${version} 
REPOSITORY: ${repoUrl}
AUTHORS: 
	- ${author} (${authorLink})
	- ${contributors} (${contributorsLink})

DEVELOPED BY ${collective.toUpperCase()} 🐦🌈
` 

}
