using Litium.FieldFramework;
using System;

namespace Litium.Accelerator.FieldTypes.PasswordField
{
    public class PasswordFieldTypeMetadata : FieldTypeMetadataBase
    {
        public override string Id => "PasswordField";
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
