using Litium.FieldFramework;
using Litium.Web.Administration.FieldFramework;
using Newtonsoft.Json.Linq;

namespace Litium.Accelerator.FieldTypes
{
    internal abstract class FieldTypeConverterBase : IEditFieldTypeConverter
    {
        private readonly IFieldTypeMetadata _fieldTypeMetadata;
        public FieldTypeConverterBase(FieldTypeMetadataService fieldTypeMetadataService, string fieldTypeMetadataServiceName)
        {
            _fieldTypeMetadata = fieldTypeMetadataService.Get(fieldTypeMetadataServiceName);
        }
        public object CreateOptionsModel() => null;
        public virtual object ConvertFromEditValue(EditFieldTypeConverterArgs args, JToken item)
        {
            var fieldTypeInstance = _fieldTypeMetadata.CreateInstance(args.FieldDefinition);
            return fieldTypeInstance.ConvertFromJsonValue(item.ToObject(_fieldTypeMetadata.JsonType));
        }
        public virtual JToken ConvertToEditValue(EditFieldTypeConverterArgs args, object item)
        {
            var fieldTypeInstance = _fieldTypeMetadata.CreateInstance(args.FieldDefinition);
            var value = fieldTypeInstance.ConvertToJsonValue(item);
            if (value == null)
            {
                return JValue.CreateNull();
            }
            return JToken.FromObject(value);
        }
        /// <summary>
        /// The AngularJS controller name to edit the CustomText field.
        /// </summary>
        public string EditControllerName => null;
        /// <summary>
        /// The AngularJS template to edit the CustomText field.
        /// </summary>
        public string EditControllerTemplate => null;
        /**
         * Since we don't have the setting UI for this CustomText field, we can skip the setting controllers and components.
         * */
        public string SettingsControllerName => null;
        public string SettingsControllerTemplate => null;

        public abstract string EditComponentName { get; }
        public abstract string SettingsComponentName { get; }
    }
}
