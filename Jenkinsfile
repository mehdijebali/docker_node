pipeline{
    agent { dockerfile true }
    stages{
        stage("pre-build"){
            steps{
                sh 'docker --version'
                sh 'npm install'
            }
        }
        // stage("build"){
        //     docker.build("saifromdhane/nodeserver")
        //     docker.withRegistry('https://registry.hub.docker.com', 'git') {            
        //         app.push("${env.BUILD_NUMBER}")            
        //         app.push("latest")        
        //     }    
        // }
    }
}
