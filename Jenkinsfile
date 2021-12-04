pipeline{
    agent any
    stages{
        stage('pre-build'){

        }
        stage('build'){
            docker.build("saifromdhane/nodeserver")
            docker.withRegistry('https://registry.hub.docker.com', 'git') {            
                app.push("${env.BUILD_NUMBER}")            
                app.push("latest")        
            }    
        }
        stage('post-build'){
            sh 'echo "build success"'
        }
    }
}
