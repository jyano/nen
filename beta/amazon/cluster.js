MemcachedStore = require('connect-memcached')($e)


//Deploying an Express Application with Clustering to Elastic Beanstalk
//
//This section walks you through deploying a sample application to Elastic Beanstalk
//using EB Command Line Interface (CLI) 3.x and Git,
//and then updating the application to use the Express framework and Amazon ElastiCache for clustering.
//Clustering enhances your web application's high availability,
// performance, and security. To learn more about Amazon ElastiCache,
//  go to Introduction to ElastiCache in the Amazon ElastiCache User Guide.
//
//Note
//This example creates AWS resources, which you may be charged for.
//For more information about AWS pricing, go to http://aws.amazon.com/pricing/.
//Some services are part of the AWS Free Usage Tier. If you are a new customer,
// you may test drive these services for free.
// Go to http://aws.amazon.com/free/ for more information.
//Step 1: Set Up Your Git Repository
//
//EB CLI is a command line interface that you can use with
//Git to deploy applications quickly and more easily. EB is available as part of the
//Elastic Beanstalk command line tools package. For instructions to install EB CLI,
//see Install the EB Command Line Interface (CLI).
//
//Initialize your Git repository. After you run the following command, when you run eb init,
//EB CLI will recognize that your application is set up with Git.
//
//git init .
//Step 2: Set Up Your Express Development Environment
//
//Set up Express and create the project structure. The following walks you through setting up Express on a Linux operating system.
//
//To set up your Express development environment on your local computer
//
//Install node.js. For instructions, go to http://nodejs.org/. Verify you have a successful installation before proceeding to the next step.
//
//$ node -v
//Note
//For information about what Node.js versions are supported, see Supported Platforms.
//Create a directory for your Express application.
//
//$ mkdir express-cluster
//$ cd express-cluster
//Install npm.
//
//express-cluster# cd . && yum install npm
//Install Express globally so that you have access to the express command.
//
//express-cluster# npm install -g express-generator
//Depending on your operating system, you may need to set your path to run the express command.
//If you need to set your path, use the output from the previous step when you installed Express.
//The following is an example.
//
//express-cluster# export:PATH=$PATH:/usr/local/share/npm/bin/express
//Run the express command. This generates package.json.
//
//express-cluster# express
//When prompted if you want to continue, type y.
//
//Set up local dependencies
//
//express-cluster# cd . && npm install
//Verify it works.
//
//express-cluster# node app
//You should see output similar to the following:
//
//Express server listening on port 3000
//Press Ctrl+C to stop the server.
//
//Initialize the Git repository.
//
//express-cluster# git init
//Exclude the following files from being added to the repository.
// This step is not required, but it is recommended.
//
//express-cluster# cat > .gitignore <<EOT
//node_modules/
//.gitignore
//.elasticbeanstalk/
//EOT
//Step 3: Configure Elastic Beanstalk
//
//You use eb, a command line tool, to configure Elastic Beanstalk.
//If you haven't already installed eb on your local computer,
// do that now at the AWS Sample Code & Libraries website. If you are running eb on a Linux operating system, you will need to install Python 2.7 or 3.0.
//
//Before you use eb, set your PATH to the location of eb. The following table shows an example
// for Linux/UNIX and Windows.
//
//In Linux and UNIX	In Windows
//$ export PATH=$PATH:<path to unzipped eb CLI package>/eb/linux/python2.7/
//If you are using Python 3.0, the path will include python3 rather than python2.7.
//C:\> set PATH=%PATH%;<path to unzipped eb CLI package>\eb\windows\
//Use the init command, and Elastic Beanstalk will prompt you to enter this information.
//If a default value is available, and you want to use it, press Enter.
//
//To configure Elastic Beanstalk
//
//From the directory where you created your local repository, type the following command:
//
//eb init
//When you are prompted for the Elastic Beanstalk region,
// type the number of the region. For information about this product's regions,
// go to Regions and Endpoints in the Amazon Web Services General Reference. For this example, we'll use US West (Oregon).
//
//When you are prompted for the Elastic Beanstalk application to use,
// type the number corresponding to the option Create new Application.
//  Elastic Beanstalk generates an application name based on the current directory name if an application name has not been previously configured. In this example, we use expressapp.
//
//Enter an AWS Elastic Beanstalk application name (auto-generated value is "express-cluster"): expressclusterapp
//Note
//If you have a space in your application name, make sure you do not use quotation marks.
//Type y if Elastic Beanstalk correctly detected the correct platform you are using. Type n if not, and then specify the correct platform.
//
//When prompted, type y if you want to set up Secure Shell (SSH) to connect to your instances. Type n if you do not want to set up SSH. In this example, we will type n.
//
//Do you want to set up SSH for your instances?
//(y/n): n
//Create your running environment.
//
//eb create
//When you are prompted for the Elastic Beanstalk environment name, type the name of the environment. Elastic Beanstalk automatically creates an environment name based on your application name. If you want to accept the default, press Enter.
//
//Enter Environment Name
//(default is HelloWorld-env):
//Note
//If you have a space in your application name, make sure you do not have a space in your environment name.
//When you are prompted to provide a CNAME prefix, type the CNAME prefix you want to use. Elastic Beanstalk automatically creates a CNAME prefix based on the environment name. If you want to accept the default, press Enter.
//
//Enter DNS CNAME prefix
//(default is HelloWorld):
//After configuring Elastic Beanstalk, you are ready to deploy a sample application.
//
//If you want to update your Elastic Beanstalk configuration, you can use the init command again. When prompted, you can update your configuration options. If you want to keep any previous settings, press the Enter key.
//
//To deploy a sample application
//
//From the directory where you created your local repository, type the following command:
//
//eb deploy
//This process may take several minutes to complete. Elastic Beanstalk will provide status updates during the process. If at any time you want to stop polling for status updates, press Ctrl+C. Once the environment status is Green, Elastic Beanstalk will output a URL for the application. You can copy and paste the URL into your web browser to view the application.
//
//Step 4: View the Application
//
//To view the application
//
//To open your application in a browser window, type the following:
//
//eb open
//Step 5: Update the Application
//
//After you have deployed a sample application, you can update it with your own application. In this step, we update the sample application to use the Express framework. You can download the final source code from http://elasticbeanstalk-samples-us-east-1.s3.amazonaws.com/nodejs-example-express-elasticache.zip.
//
//To update your application to use Express
//
//On your local computer, rename express-cluster/app.js to express-cluster/express-app.js.
//
//express-cluster# mv app.js express-app.js
//Update the line var app = express(); in express-cluster/express-app.js to the following:
//
//var app = module.exports = express();
//On your local computer, create a file named express-cluster/app.js with the following code.

  cluster = require('cluster')

      app = require('./express-app');

  workers = {}

count = require('os').cpus().length;

function spawn(){var w  = cluster.fork();workers[w.pid] = w; return w}

if (cluster.isMaster) {
  for (var i = 0; i < count; i++) {spawn()}
  cluster.on('death', function(w){
    $l('worker '+w.pid+' died. spawning a new process...');
    delete workers[w.pid]
    spawn()})
} 

else {$a.lsn(pc.env.PORT||5000)}


//Stage the files.
//
//express-cluster# git add .
//express-cluster# git commit -m "First express app"
//express-cluster# eb deploy
//Your environment will be updated after a few minutes. Once the environment is green and ready, refresh the URL to verify it worked. You should see a web page that says "Welcome to Express".
//
//You can access the logs for your EC2 instances running your application. For instructions on accessing your logs, see Working with Logs.
//
//Next, let's update the Express application to use Amazon ElastiCache.
//
//To update your Express application to use Amazon ElastiCache
//
//On your local computer, create an .ebextensions directory in the top-level directory of your source bundle. In this example, we use express-cluster/.ebextensions.
//
//Create a configuration file express-cluster/.ebextensions/elasticache-iam-with-script.config with the following snippet. For more information about the configuration file, see Customizing and Configuring a Node.js Environment. This creates an IAM user with the permissions required to discover the elasticache nodes and writes to a file anytime the cache changes. You can also copy the file from http://elasticbeanstalk-samples-us-east-1.s3.amazonaws.com/nodejs-example-express-elasticache.zip. For more information on the ElastiCache properties, see Example Snippets: ElastiCache. For a more complete reference, see AWS Resource Types Reference.
//
//Note
//Note
//Configuration files must conform to YAML or JSON formatting standards. For example, indentation is critical to the proper interpretation of YAML. For more information, go to http://www.yaml.org/start.html or http://www.json.org, respectively. For more information about using configuration files to deploy an application to Elastic Beanstalk, see Using Configuration Files.
//Resources:
//  MyElastiCache:
//    Type: AWS::ElastiCache::CacheCluster
//    Properties:
//      CacheNodeType:
//         Fn::GetOptionSetting:
//             OptionName : CacheNodeType
//             DefaultValue: cache.m1.small
//      NumCacheNodes:
//           Fn::GetOptionSetting:
//             OptionName : NumCacheNodes
//             DefaultValue: 1
//      Engine:
//           Fn::GetOptionSetting:
//             OptionName : Engine
//             DefaultValue: memcached
//      CacheSecurityGroupNames:
//        - Ref: MyCacheSecurityGroup
//  MyCacheSecurityGroup:
//    Type: AWS::ElastiCache::SecurityGroup
//    Properties:
//      Description: "Lock cache down to webserver access only"
//  MyCacheSecurityGroupIngress:
//    Type: AWS::ElastiCache::SecurityGroupIngress
//    Properties:
//      CacheSecurityGroupName:
//        Ref: MyCacheSecurityGroup
//      EC2SecurityGroupName:
//        Ref: AWSEBSecurityGroup
//  AWSEBAutoScalingGroup :
//    Metadata :
//      ElastiCacheConfig :
//        CacheName :
//          Ref : MyElastiCache
//        CacheSize :
//           Fn::GetOptionSetting:
//             OptionName : NumCacheNodes
//             DefaultValue: 1
//  WebServerUser :
//    Type : AWS::IAM::User
//    Properties :
//      Path : "/"
//      Policies:
//        -
//          PolicyName: root
//          PolicyDocument :
//            Statement :
//              -
//                Effect : Allow
//                Action :
//                  - cloudformation:DescribeStackResource
//                  - cloudformation:ListStackResources
//                  - elasticache:DescribeCacheClusters
//                Resource : "*"
//  WebServerKeys :
//    Type : AWS::IAM::AccessKey
//    Properties :
//      UserName :
//        Ref: WebServerUser
//
//Outputs:
//  WebsiteURL:
//    Description: sample output only here to show inline string function parsing
//    Value: |
//      http://`{ "Fn::GetAtt" : [ "AWSEBLoadBalancer", "DNSName" ] }`
//  MyElastiCacheName:
//    Description: Name of the elasticache
//    Value:
//      Ref : MyElastiCache
//  NumCacheNodes:
//    Description: Number of cache nodes in MyElastiCache
//    Value:
//      Fn::GetOptionSetting:
//        OptionName : NumCacheNodes
//        DefaultValue: 1
//
//files:
//  "/etc/cfn/cfn-credentials" :
//    content : |
//      AWSAccessKeyId=`{ "Ref" : "WebServerKeys" }`
//      AWSSecretKey=`{ "Fn::GetAtt" : ["WebServerKeys", "SecretAccessKey"] }`
//    mode : "000400"
//    owner : root
//    group : root
//
//  "/etc/cfn/get-cache-nodes" :
//    content : |
//      # Define environment variables for command line tools
//      export AWS_ELASTICACHE_HOME="/home/ec2-user/elasticache/$(ls /home/ec2-user/elasticache/)"
//      export AWS_CLOUDFORMATION_HOME=/opt/aws/apitools/cfn
//      export PATH=$AWS_CLOUDFORMATION_HOME/bin:$AWS_ELASTICACHE_HOME/bin:$PATH
//      export AWS_CREDENTIAL_FILE=/etc/cfn/cfn-credentials
//      export JAVA_HOME=/usr/lib/jvm/jre
//
//      # Grab the Cache node names and configure the PHP page
//      cfn-list-stack-resources `{ "Ref" : "AWS::StackName" }` --region `{ "Ref" : "AWS::Region" }` | grep MyElastiCache | awk '{print $3}' | xargs -I {} elasticache-describe-cache-clusters {} --region `{ "Ref" : "AWS::Region" }` --show-cache-node-info | grep CACHENODE | awk '{print $4 ":" $5}' > `{ "Fn::GetOptionSetting" : { "OptionName" : "NodeListPath", "DefaultValue" : "/var/www/html/nodelist" } }`
//    mode : "000500"
//    owner : root
//    group : root
//
//  "/etc/cfn/hooks.d/cfn-cache-change.conf" :
//    "content": |
//      [cfn-cache-size-change]
//      triggers=post.update
//      path=Resources.AWSEBAutoScalingGroup.Metadata.ElastiCacheConfig
//      action=/etc/cfn/get-cache-nodes
//      runas=root
//
//sources :
//  "/home/ec2-user/elasticache" : "https://s3.amazonaws.com/elasticache-downloads/AmazonElastiCacheCli-latest.zip"
//
//commands:
//  make-elasticache-executable:
//    command: chmod -R ugo+x /home/ec2-user/elasticache/*/bin/*
//
//packages :
//  "yum" :
//    "aws-apitools-cfn"  : []
//
//container_commands:
//  initial_cache_nodes:
//    command: /etc/cfn/get-cache-nodes
//On your local computer, create a configuration file express-cluster/.ebextensions/elasticache_settings.config with the following snippet to configure ElastiCache.
//
//option_settings:
//  "aws:elasticbeanstalk:customoption" :
//     CacheNodeType : cache.m1.small
//     NumCacheNodes : 1
//     Engine : memcached
//     NodeListPath : /var/nodelist
//On your local computer, replace express-cluster/express-app.js with the following snippet. This file reads the nodes list from disk (/var/nodelist) and configures express to use memcached as a session store if nodes are present. Your file should look like the following.
//
///**
// * Module dependencies.
// */
//
  
    fN = '/var/nodelist'



function setup(cacheNodes) {
  $a.configure(function(){
      $a.use(express.bodyParser());
      $a.use(express.methodOverride());
      if (cacheNodes) {
          $a.use(express.cookieParser());

          $l('Using memcached store nodes:');
          $l(cacheNodes);

          $a.use(express.session({
              secret: 'your secret here',
              store: new MemcachedStore({'hosts':cacheNodes})
          }));
      } else {
        $l('Not using memcached store.');
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
      }
      app.use(app.router);
  });

  app.get('/', function(req, resp){
      resp.writeHead(200, "Content-type: text/html");
      resp.write("You are session: " + req.session.id);
      resp.end();
  });

  if (!module.parent) {
      $l('Running express without cluster.');
     $a.lsn(process.env.PORT || 5000);
  }
}

// Load elasticache configuration.

$f.rF(fN, 'UTF8', function(z,d) {
    if (z) throw z
    var cacheNodes = [], lines
    if (d) {_.e(lines = d.split('\n'), function(ln){if (ln.length > 0) {cacheNodes.push(ln)}})}
    setup(cacheNodes);
});


//On your local computer, update express-cluster/package.json to add connect-memcached to the dependencies.

o={
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app"
  },
  "dependencies": {
    "express": "3.1.0",
    "jade": "*",
    "connect-memcached": "*"
  }
}
//Add your updated files to your local repository and commit your changes.
//
//express-cluster# git add .
//express-cluster# git commit -m "Adding ElastiCache"
//express-cluster# eb deploy
//Your environment will be updated after a few minutes. After your environment is green and ready, verify everything worked.
//
//Check the Amazon CloudWatch console to view your ElastiCache metrics. To view your ElastiCache metrics, click ElastiCache in the left pane, and then select ElastiCache: Cache Node Metrics from the Viewing list.
//
//
//Note
//Make sure you are looking at the same region that you deployed your application to.
//If you copy and paste your application URL into another web browser, you should see your CurrItem count go up to 2 after 5 minutes.
//
//Take a snapshot of your logs, and check /var/log/nodejs/nodejs.log. For more information about logs, see Working with Logs. You should see something similar to the following:
//
//MemcachedStore initialized for servers: aws-my-1oys9co8zt1uo.1iwtrn.0001.use1.cache.amazonaws.com:11211
//Step 6: Clean Up
//
//If you no longer want to run your application, you can clean up by terminating your environment and deleting your application.
//
//Use the terminate command to terminate your environment and the delete command to delete your application.
//
//To terminate your environment and delete the application
//
//From the directory where you created your local repository, type the following command:
//
//eb terminate
//This process may take a few minutes. Elastic Beanstalk displays a message once the environment has been successfully terminated.
//
//Note
//If you attached an Amazon RDS DB instance to your environment, your Amazon RDS DB will be deleted, and you will lose your data. To save your data, create a snapshot before you delete the application. For instructions on how to create a snapshot, go to Creating a DB Snapshot in the Amazon Relational Database Service User Guide.