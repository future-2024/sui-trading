module eth::eth {
    use std::option;
    use sui::coin;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext, sender};

    /// The type identifier of coin. The coin will have a type
    /// tag of kind: `Coin<package_object::mycoin::MYCOIN>`
    /// Make sure that the name of the type matches the module's name.
    struct ETH has drop {}

    /// Module initializer is called once on module publish. A treasury
    /// cap is sent to the publisher, who then controls minting and burning
    fun init(witness: ETH, ctx: &mut TxContext) {
        let (treasury, metadata) = coin::create_currency(witness, 6, b"ETH", b"", b"", option::none(), ctx);
        transfer::freeze_object(metadata);
        coin::mint_and_transfer(&mut treasury, 10000000000, tx_context::sender(ctx), ctx);
        transfer::transfer(treasury, tx_context::sender(ctx))
    }
}
