FROM openjdk:17-slim 
COPY target/medicareproject-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","-D spring.datasource.url=jdbc:mysql://3.92.198.166:3306/medicare","app.jar"]
