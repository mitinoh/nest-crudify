import {
  Module,
  DynamicModule,
  OnModuleInit,
  INestApplication,
} from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ISwaggerModuleOptions } from "./swagger.interface";

@Module({})
export class CrudifySwaggerModule implements OnModuleInit {
  private static options: ISwaggerModuleOptions;
  static forRoot(options: ISwaggerModuleOptions): DynamicModule {
    this.options = options;
    return {
      module: CrudifySwaggerModule,
    };
  }

  onModuleInit() {}

  static setupSwagger(app: INestApplication<any> | any) {
    const title = this.options?.title || "Crudify API";
    const description = this.options?.description || "Api generated by Crudify";
    const version = this.options?.version || "1.0";

    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)

      .setExternalDoc("Logs errsole", "http://localhost:3001/#/logs")
      .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api", app, document, {
      swaggerOptions: {
        persistAuthorization: true,
        filter: true,
        tryItOutEnabled: true,
      },
    });
  }
}
