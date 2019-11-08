using Litium.FieldFramework;
using Litium.Runtime.DependencyInjection;
using System;

namespace Litium.Accelerator.FieldTypes.ReactTextField
{
    [Service(Name = "ReactTextField")]
    internal class ReactTextFieldTypeConverter : FieldTypeConverterBase
    {
        public ReactTextFieldTypeConverter(FieldTypeMetadataService fieldTypeMetadataService) : base(fieldTypeMetadataService, "PasswordField")
        { }

        public override string EditComponentName => "FieldTypeBag#FieldEditorReactText";
        public override string SettingsComponentName => string.Empty;
    }

    public class ReactTextFieldTypeMetadata : FieldTypeMetadataBase
    {
        public override string Id => "ReactTextField";
        public override bool CanBeGridColumn => true;
        public override bool CanBeGridFilter => false;
        public override bool CanSort => false;
        public override Type JsonType => typeof(string);
        public override IFieldType CreateInstance(IFieldDefinition fieldDefinition)
        {
            var item = new StringFieldType();
            item.Init(fieldDefinition);
            return item;
        }
    }
}
