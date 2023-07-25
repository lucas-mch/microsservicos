FROM maven:3-amazoncorretto-17 as build
ENV HOME=/usr/app
RUN mkdir -p $HOME
WORKDIR $HOME
ADD . $HOME
RUN mvn package -Dspring.profiles.active=build

FROM amazoncorretto:17
COPY --from=build /usr/app/target/api-product-0.0.1-SNAPSHOT.jar /app/runner.jar
EXPOSE 8081
ENTRYPOINT ["java","-Dspring.profiles.active=build","-jar","/app/runner.jar"]