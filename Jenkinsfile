pipeline{
    environment {
        imagename = "saifromdhane/nodeserver"
        registryCredential = 'dockerhub_credentials'
        dockerImage = ''
    }
    agent any
    stages{
        stage("pre-build"){
            
            steps{
                sh 'docker --version'
                sh 'npm install'
            }
        }
        stage("build"){
            steps{
                script {
                    dockerImage = docker.build imagename   
                    docker.withRegistry( '', registryCredential ) {
                    dockerImage.push("$BUILD_NUMBER")
                    dockerImage.push('latest')
                    }
                }
            }
        }
    }
}